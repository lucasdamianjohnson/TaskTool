/**
 * @template T
 * @callback ObservableFunction
 * @param {T} data
 */

/**
 * A lightweight observable pattern implementation.
 *
 * @template T
 */
export class Observable {
  /**
   * @private
   * @type {ObservableFunction<T>[]}
   */
  observers = [];

  /**
   * @private
   * @type {Set<ObservableFunction<T>> | null}
   */
  once = null;

  constructor() {}

  /**
   * Casts any function to an `ObservableFunction<T>`.
   * Useful for type safety or editor hints.
   *
   * @param {any} func
   * @returns {ObservableFunction<T>}
   */
  listener(func) {
    return /** @type {ObservableFunction<T>} */ (func);
  }

  /**
   * Subscribes to notifications from this observable.
   *
   * @param {ObservableFunction<T>} func - The observer callback function.
   */
  subscribe(func) {
    this.observers.push(func);
  }

  /**
   * Unsubscribes a previously subscribed observer.
   *
   * @param {ObservableFunction<T>} func - The observer function to remove.
   * @returns {boolean} True if the function was found and removed.
   */
  unsubscribe(func) {
    for (let i = 0; i < this.observers.length; i++) {
      if (this.observers[i] === func) {
        this.observers.splice(i, 1);
        if (this.once && this.once.has(func)) this.once.delete(func);
        return true;
      }
    }
    return false;
  }

  /**
   * Subscribes to the observable for a single notification.
   * Automatically unsubscribes after the first call.
   *
   * @param {ObservableFunction<T>} func - The observer function.
   */
  subscribeOnce(func) {
    this.observers.push(func);
    if (!this.once) this.once = new Set();
    this.once.add(func);
  }

  /**
   * Notifies all subscribed observers with the given data.
   * Automatically removes any one-time observers after they're called.
   *
   * @param {T} data - Data to pass to observers.
   */
  notify(data) {
    for (let i = this.observers.length - 1; i >= 0; i--) {
      const func = this.observers[i];
      func(data);
      if (this.once && this.once.has(func)) {
        this.observers.splice(i, 1);
        this.once.delete(func);
      }
    }
  }

  /**
   * Clears all observers.
   */
  clear() {
    if (this.once) this.once.clear();
    this.observers.length = 0;
  }
}
