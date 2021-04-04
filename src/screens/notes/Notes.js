import React, { useEffect } from 'react';
import { SafeAreaView, Animated } from 'react-native';
import { BG_HOME } from '../../assets/Images';
import { ImageBackground } from '../../assets/Styles';

import { notes } from '../../mocks/NotesMock';
import Note from '../../components/note/Note';
import { Grid, CustomFlatList } from './Notes.styles';
import { startPage } from './Notes.animations';

const Notes = () => {
  const notesElements = [];
  const noteElement = () => ({
    opacity: new Animated.Value(0),
    position: new Animated.ValueXY(0, 0)
  });
  notes.map(() => notesElements.push(noteElement()));

  useEffect(() => {
    startPage(notesElements);
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground source={BG_HOME}>
        <Grid>
          <CustomFlatList
            data={notes}
            numColumns={2}
            renderItem={({ item, index }) =>
              <Note
                id={index}
                opacity={notesElements[index].opacity}
                position={notesElements[index].position}
                text={item.text} />
            }
            keyExtractor={(item) => item.id}
          />
        </Grid>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Notes;
