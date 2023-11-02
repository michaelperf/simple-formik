import { StyleSheet, TextInput, View, Button } from 'react-native';
import { Formik } from 'formik';

export default function App() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: '', name: '', phone: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(fProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Review title'
              onChangeText={fProps.handleChange('title')}
              value={fProps.values.title}
            />
            <TextInput
              multiline
              style={styles.input}
              placeholder='Name'
              onChangeText={fProps.handleChange('name')}
              value={fProps.values.name}
            />
            <TextInput
              style={styles.input}
              placeholder='Phone'
              onChangeText={fProps.handleChange('phone')}
              value={fProps.values.phone}
            />
            <Button
              title='submit'
              color='maroon'
              onPress={fProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
