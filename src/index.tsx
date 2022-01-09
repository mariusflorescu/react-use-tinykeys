import React from 'react';
import type { KeyBindingMap, KeyBindingOptions } from './types';
import tinykeys from './tinykeys';

const useTinykeys = (
  target: Window | HTMLElement,
  keyBindingMap: KeyBindingMap,
  options: KeyBindingOptions = {}
) => {
  React.useEffect(() => {
    const unsub = tinykeys(target, keyBindingMap, options);
    return () => unsub();
  }, [keyBindingMap]);
  return;
};

export default useTinykeys;
