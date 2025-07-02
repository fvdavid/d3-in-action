import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor, Bold, Essentials, Heading, Indent, IndentBlock, Italic, Link, List, MediaEmbed, Paragraph, Table, Undo } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

@Component({
    selector: 'app-ckeditor',
    imports: [CKEditorModule],
    templateUrl: './ckeditor.component.html',
    styleUrl: './ckeditor.component.scss'
})
export class CkeditorComponent {
    title = 'angular';
    public Editor = ClassicEditor;
    public config = {
        toolbar: ['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', '|', 'link', 'insertTable', 'mediaEmbed', '|', 'bulletedList', 'numberedList', 'indent', 'outdent'],
        plugins: [Bold, Essentials, Heading, Indent, IndentBlock, Italic, Link, List, MediaEmbed, Paragraph, Table, Undo],

        // trial
        licenseKey:
            'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTI3MTAzOTksImp0aSI6ImQ2YTMxNmY3LWM4ZjItNGJiNi1hMmRjLWFjZjcwYTY0NDlhNyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImQzOWQzOGJlIn0.IZwPEilcHouWq2xRQEXLz_naOZXQcZ-LY_iFYtx3rd6HrINhaZPmtfyHKo7TTMtb0ZYakxfT87QIa5Nqql-Ong'

        // dev:
        // licenseKey: "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODMwMzY3OTksImp0aSI6ImVjMDQwMDc5LTdlMDItNDAwZi1iODJjLTZjZjg5NTdhMmUyYyIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIiwiQk9YIl0sInZjIjoiYTRlODQ1MmIifQ.XUUYZPzvwBSCK8vBDwsB8oh68e_3DGid-8zNwfOI40fTtkIBhp6_Rxu10XCdRGlmRUah49WgMvfM9oFPYVOOAw"
    };
}
