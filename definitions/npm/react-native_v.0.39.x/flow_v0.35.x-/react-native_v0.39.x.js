declare module 'react-native' {
  declare type AccessibilityTrait =
    'none' |
    'button' |
    'link' |
    'header' |
    'search' |
    'image' |
    'selected' |
    'plays' |
    'key' |
    'text' |
    'summary' |
    'disabled' |
    'frequentUpdates' |
    'startsMedia' |
    'adjustable' |
    'allowsDirectInteraction' |
    'pageTurn';

  declare type AccessibilityComponentType =
    'none' |
    'button' |
    'radiobutton_checked' |
    'radiobutton_unchecked';

  //@TODO make it more granular
  declare type BaseEvent = {
    nativeEvent?: any
  }

  declare type EdgeInsetsPropType = {
    top?: number,
    left?: number,
    bottom?: number,
    right?: number
  }

  //@TODO define!
  //there are e.g. ViewStylePropTypes and TextStylePropTypes that we can use
  declare type StyleSheet = {
      Styles: any
  }

  //@TODO define!
  declare type ColorPropType = any;

  /**
   * @see https://github.com/facebook/react-native/blob/master/Libraries/Components/TextInput/TextInput.js#L223
   */
  declare type KeyboardType =
    // Cross-platform
    'default' |
    'email-address' |
    'numeric' |
    'phone-pad' |
    // iOS-only
    'ascii-capable' |
    'numbers-and-punctuation' |
    'url' |
    'number-pad' |
    'name-phone-pad' |
    'decimal-pad' |
    'twitter' |
    'web-search';

  /**
   * @see https://github.com/facebook/react-native/blob/master/Libraries/Components/TextInput/TextInput.js#L280
   */
  declare type ReturnKeyType =
    // Cross-platform
    'done' |
    'go' |
    'next' |
    'search' |
    'send' |
    // Android-only
    'none' |
    'previous' |
    // iOS-only
    'default' |
    'emergency-call' |
    'google' |
    'join' |
    'route' |
    'yahoo';

  /**
   * @see https://github.com/facebook/react-native/blob/master/Libraries/Components/TextInput/TextInput.js#L54
   */
  declare type DataDetectorTypes =
    'phoneNumber' |
    'link' |
    'address' |
    'calendarEvent' |
    'none' |
    'all';

  declare type ViewProps = {
    accessible: boolean,
    accessibilityLabel: any, // react node
    accessibilityComponentType: AccessibilityComponentType,
    accessibilityLiveRegion: 'none' | 'polite' | 'assertive',
    importantForAccessibility: 'auto' | 'yes' | 'no' | 'no-hide-descendants',
    accessibilityTraits: AccessibilityTrait | AccessibilityTrait[],
    accessibilityViewIsModal: boolean,
    onAccessibilityTap: Function,
    onMagicTap: Function,
    testID: string,
    onResponderGrant: (e?: BaseEvent) => void,
    onResponderMove: (e?: BaseEvent) => void,
    onResponderReject: (e?: BaseEvent) => void,
    onResponderRelease: (e?: BaseEvent) => void,
    onResponderTerminate: (e?: BaseEvent) => void,
    onResponderTerminationRequest: (e?: BaseEvent) => void,
    onStartShouldSetResponder: (e?: BaseEvent) => void,
    onStartShouldSetResponderCapture: (e?: BaseEvent) => void,
    onMoveShouldSetResponder: Function,
    onMoveShouldSetResponderCapture: (e?: BaseEvent) => void,
    hitSlop: EdgeInsetsPropType,
    onLayout: (e?: BaseEvent) => void,
    pointerEvents: 'box-none' | 'none' | 'box-only' | 'auto',
    style: StyleSheet.Styles, // should be ViewStylePropType
    removeClippedSubviews: boolean,
    renderToHardwareTextureAndroid: boolean,
    shouldRasterizeIOS: boolean,
    collapsable: boolean,
    needsOffscreenAlphaCompositing: boolean
  }

  declare type TextInputProps = ViewProps & {
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters',
    autoCorrect?: boolean,
    spellCheck?: boolean,
    autoFocus?: boolean,
    editable?: boolean,
    keyboardType?: KeyboardType,
    keyboardAppearance?: 'default' | 'light' | 'dark',
    returnKeyType?: ReturnKeyType,
    returnKeyLabel?: string,
    maxLength?: number,
    numberOfLines?: number,
    disableFullscreenUI?: boolean,
    enablesReturnKeyAutomatically?: boolean,
    multiline?: boolean,
    textBreakStrategy?: 'simple' | 'highQuality' | 'balanced',
    onBlur?: (e?: BaseEvent) => void,
    onFocus?: (e?: BaseEvent) => void,
    onChange?: (e?: BaseEvent) => void,
    onChangeText?: (e?: BaseEvent) => void,
    onContentSizeChange?: (e?: BaseEvent) => void,
    onEndEditing?: (e?: BaseEvent) => void,
    onSelectionChange?: (e?: BaseEvent) => void,
    onSubmitEditing?: (e?: BaseEvent) => void,
    onKeyPress?: (e?: BaseEvent) => void,
    onLayout?: (e?: BaseEvent) => void,
    onScroll?: (e?: BaseEvent) => void,
    placeholder?: string,
    placeholderTextColor?: ColorPropType,
    secureTextEntry?: boolean,
    selectionColor?: ColorPropType,
    selectionState?: any,
    selection?: {
      start: number,
      end?: number
    },
    value?: string,
    defaultValue?: string,
    clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always',
    clearTextOnFocus?: boolean,
    selectTextOnFocus?: boolean,
    blurOnSubmit?: boolean,
    style?: StyleSheet.Styles, // should be TextStylePropType
    underlineColorAndroid?: ColorPropType,
    inlineImageLeft?: string,
    inlineImagePadding?: number,
    dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[],
    caretHidden?: boolean
  }

  declare export class TextInput extends React$Component {
    props: TextInputProps;
  }
  declare export class View extends React$Component {
    props: ViewProps;
  }
}
