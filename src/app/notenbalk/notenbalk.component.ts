import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notenbalk',
  templateUrl: './notenbalk.component.html',
  styleUrls: ['./notenbalk.component.css']
})
export class NotenbalkComponent implements OnInit {

  musicXml: String = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC
    "-//Recordare//DTD MusicXML 4.0 Partwise//EN"
    "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <work>
    <work-title>Tree Music From A Forest</work-title>
  </work>
  <part-list>
    <score-part id="Oak1">
      <part-name>Oak</part-name>
    </score-part>
    <score-part id="Maple1">
      <part-name>Maple</part-name>
    </score-part>
  </part-list>
  <part id="Oak1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>5</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>F</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note> <pitch> <step>C</step> <octave>2</octave> </pitch> <duration>2</duration> <type>half</type> </note>
      <note> <pitch> <step>C</step> <octave>3</octave> </pitch> <duration>2</duration> <type>half</type> </note>
      <note> <pitch> <step>G</step> <octave>2</octave> </pitch> <duration>2</duration> <type>quarter</type> </note>
    </measure>
    <measure number="2">
      <note> <pitch> <step>G</step> <octave>2</octave> </pitch> <duration>2</duration> <type>quarter</type> </note>
      <note> <pitch> <step>C</step> <octave>3</octave> </pitch> <duration>2</duration> <type>half</type> </note>
      <note> <pitch> <step>C</step> <octave>2</octave> </pitch> <duration>2</duration> <type>half</type> </note>
    </measure>
  </part>
  <part id="Maple1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>5</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>F</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note> <pitch> <step>G</step> <octave>2</octave> </pitch> <duration>2</duration> <type>quarter</type> </note>
      <note> <pitch> <step>C</step> <octave>3</octave> </pitch> <duration>2</duration> <type>half</type> </note>
      <note> <pitch> <step>C</step> <octave>2</octave> </pitch> <duration>2</duration> <type>half</type> </note>
    </measure>
    <measure number="2">
      <note> <pitch> <step>C</step> <octave>2</octave> </pitch> <duration>2</duration> <type>half</type> </note>
      <note> <pitch> <step>C</step> <octave>3</octave> </pitch> <duration>2</duration> <type>half</type> </note>
      <note> <pitch> <step>G</step> <octave>2</octave> </pitch> <duration>2</duration> <type>quarter</type> </note>
    </measure>
  </part>
</score-partwise>`;

  constructor() { }

  ngOnInit(): void {
  }

}
