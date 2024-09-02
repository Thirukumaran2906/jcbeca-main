import React from 'react';
import CSS from './page2.module.css'

function EditorDesk() {
  return (
    <div className={CSS.boxStyle} id='desk'>
      <h2>From Editor Desk</h2>
      <p>
        We are glad to announce that the Journal for Communication and Biomedical Engineering with Computer Applications (JCBECA) journals were developed with the goal of supporting the professional development of researchers at all levels, including post-docs, scientists, professors, research scholars, and students looking for publishing opportunities for their work.
      </p>
      <p>
        The journals' goals include publishing a wide-ranging open access publication, eminent editorials from around the globe, quick online submission and quick publishing, high visibility, knowledgeable, peer-reviewed study that will help produce novel human insights. We are indexed and abstracted from reputable international journals and magazines.
      </p>
      <p>
        In order to publish top-notch, peer-reviewed research, reports, review articles, and case studies in all fields of communication, Biomedical, and computer application, JCBECA Journals is inviting you to submit a manuscript. We are inviting authors to send for the same.
      </p>
      <p>
        <strong>Chief Editor<br />JCBECA</strong>
      </p>
    </div>
  );
}

export default EditorDesk;
