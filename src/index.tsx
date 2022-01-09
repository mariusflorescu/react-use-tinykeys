import React from 'react';
import type { KeyBindingMap, KeyBindingOptions } from './types';
import tinykeys from './tinykeys';

const useTinykeys = (
  keyBindingMap: KeyBindingMap,
  options: KeyBindingOptions = {}
) => {
  React.useEffect(() => {
    if (typeof window === undefined) return;

    const unsub = tinykeys(window, keyBindingMap, options);
    return () => unsub();
  }, [keyBindingMap]);
  return;
};

export default useTinykeys;
