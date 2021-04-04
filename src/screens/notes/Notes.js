import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { notes } from '../../mocks/NotesMock';
import Note from '../../components/note/Note';
import { Grid } from './Notes.styles';

const Notes = () => {
  return (
    <SafeAreaView>
      <Grid>
        <FlatList
          data={notes}
          numColumns={2}
          renderItem={({ item }) => <Note text={item.text} />}
          keyExtractor={(item) => item.id}
        />
      </Grid>
    </SafeAreaView>
  );
};

export default Notes;
