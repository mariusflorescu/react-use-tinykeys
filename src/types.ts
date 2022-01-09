export type KeyBindingPress = [Array<string>, string];

/**
 * A map of keybinding strings to event handlers.
 */
export type KeyBindingMap = {
  [keybinding: string]: (event: KeyboardEvent) => void;
};

export interface KeyBindingHandlerOptions {
  /**
   * Keybinding sequences will wait this long between key presses before
   * cancelling (default: 1000).
   *
   * **Note:** Setting this value too low (i.e. `300`) will be too fast for many
   * of your users.
   */
  timeout?: number;

  /**
   * Ignore Focus will not execute handler if in input or textarea
   * boolean (default: false)
   */
  ignoreFocus?: boolean;
}

/**
 * Options to configure the behavior of keybindings.
 */
export interface KeyBindingOptions extends KeyBindingHandlerOptions {
  /**
   * Key presses will listen to this event (default: "keydown").
   */
  event?: 'keydown' | 'keyup';

  /**
   * Keybinding sequences will wait this long between key presses before
   * cancelling (default: 1000).
   *
   * **Note:** Setting this value too low (i.e. `300`) will be too fast for many
   * of your users.
   */
  timeout?: number;

  /**
   * Ignore Focus will not execute handler if in input or textarea
   * boolean (default: false)
   */
  ignoreFocus?: boolean;
}
