import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { Modal, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Label from './Label';
import Button from './Button';
import styles from './style/PopUp';

const Backdrop = () => (
  <BlurView style={styles.backdrop} blurType="light" blurAmount={5} />
);

type Props = {
  title: string;
  description?: string;
  onPress: () => void;
};

const PopUp = (props: Props, ref: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = useCallback(() => setIsVisible(true), []);
  const hide = useCallback(() => setIsVisible(false), []);

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  const { title, description, onPress } = props;

  return (
    <Modal
      testID="ErrorPopupModal"
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
      transparent={true}>
      <View style={styles.container}>
        <Backdrop />
        <View style={styles.popUp}>
          <Label title={title} style={styles.title} />
          {description ? (
            <Label title={description} style={styles.description} />
          ) : null}
          <Button title={'Okay'} onPress={onPress} style={styles.buttonStyle} />
        </View>
      </View>
    </Modal>
  );
};

export default forwardRef(PopUp);
