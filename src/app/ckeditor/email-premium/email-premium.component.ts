import { ChangeDetectorRef, Component, ViewEncapsulation, type AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
    type EditorConfig,
    ClassicEditor,
    Alignment,
    Autoformat,
    AutoImage,
    AutoLink,
    Autosave,
    BalloonToolbar,
    Bold,
    CKBox,
    CKBoxImageEdit,
    CloudServices,
    Emoji,
    Essentials,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    ImageEditing,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    ImageUtils,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    ListProperties,
    Mention,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    PlainTableOutput,
    RemoveFormat,
    Strikethrough,
    Style,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableLayout,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Underline
} from 'ckeditor5';
import { getEmailInlineStylesTransformations, AIAssistant, EmailConfigurationHelper, ExportInlineStyles, MergeFields, OpenAITextAdapter, PasteFromOfficeEnhanced, SourceEditingEnhanced, Template } from 'ckeditor5-premium-features';

/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = '<YOUR_LICENSE_KEY>';

/**
 * USE THIS INTEGRATION METHOD ONLY FOR DEVELOPMENT PURPOSES.
 *
 * This sample is configured to use OpenAI API for handling AI Assistant queries.
 * See: https://ckeditor.com/docs/ckeditor5/latest/features/ai-assistant/ai-assistant-integration.html
 * for a full integration and customization guide.
 */
// const AI_API_KEY = '<YOUR_AI_API_KEY>';

/**
 * Please update the following values with your tokens.
 * Instructions on how to obtain them: https://ckeditor.com/docs/trial/latest/guides/real-time/quick-start.html
 */
// const CLOUD_SERVICES_TOKEN_URL = '<YOUR_CLOUD_SERVICES_TOKEN_URL>';

const DEFAULT_HEX_COLORS = [
    { color: '#000000', label: 'Black' },
    { color: '#4D4D4D', label: 'Dim grey' },
    { color: '#999999', label: 'Grey' },
    { color: '#E6E6E6', label: 'Light grey' },
    { color: '#FFFFFF', label: 'White', hasBorder: true },
    { color: '#E65C5C', label: 'Red' },
    { color: '#E69C5C', label: 'Orange' },
    { color: '#E6E65C', label: 'Yellow' },
    { color: '#C2E65C', label: 'Light green' },
    { color: '#5CE65C', label: 'Green' },
    { color: '#5CE6A6', label: 'Aquamarine' },
    { color: '#5CE6E6', label: 'Turquoise' },
    { color: '#5CA6E6', label: 'Light blue' },
    { color: '#5C5CE6', label: 'Blue' },
    { color: '#A65CE6', label: 'Purple' }
];

@Component({
    selector: 'app-email-premium',
    imports: [CommonModule, CKEditorModule],
    templateUrl: './email-premium.component.html',
    styleUrl: './email-premium.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class EmailPremiumComponent {
    @ViewChild('editorMenuBarElement') private editorMenuBar!: ElementRef<HTMLDivElement>;

    constructor(private changeDetector: ChangeDetectorRef) {}

    public isLayoutReady = false;
    public Editor = ClassicEditor;
    public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
    public ngAfterViewInit(): void {
        this.config = {
            toolbar: {
                items: [
                    'undo',
                    'redo',
                    '|',
                    'insertMergeField',
                    'previewMergeFields',
                    '|',
                    'aiCommands',
                    'aiAssistant',
                    '|',
                    'sourceEditingEnhanced',
                    '|',
                    'heading',
                    'style',
                    '|',
                    'fontSize',
                    'fontFamily',
                    'fontColor',
                    'fontBackgroundColor',
                    '|',
                    'bold',
                    'italic',
                    'underline',
                    '|',
                    'link',
                    'insertImage',
                    'insertTable',
                    'insertTableLayout',
                    '|',
                    'alignment',
                    '|',
                    'bulletedList',
                    'numberedList',
                    'outdent',
                    'indent'
                ],
                shouldNotGroupWhenFull: false
            },
            plugins: [
                AIAssistant,
                Alignment,
                Autoformat,
                AutoImage,
                AutoLink,
                Autosave,
                BalloonToolbar,
                Bold,
                CKBox,
                CKBoxImageEdit,
                CloudServices,
                EmailConfigurationHelper,
                Emoji,
                Essentials,
                ExportInlineStyles,
                FontBackgroundColor,
                FontColor,
                FontFamily,
                FontSize,
                GeneralHtmlSupport,
                Heading,
                ImageEditing,
                ImageInline,
                ImageInsert,
                ImageInsertViaUrl,
                ImageResize,
                ImageStyle,
                ImageTextAlternative,
                ImageToolbar,
                ImageUpload,
                ImageUtils,
                Indent,
                IndentBlock,
                Italic,
                Link,
                List,
                ListProperties,
                Mention,
                MergeFields,
                OpenAITextAdapter,
                Paragraph,
                PasteFromOffice,
                PasteFromOfficeEnhanced,
                PictureEditing,
                PlainTableOutput,
                RemoveFormat,
                SourceEditingEnhanced,
                Strikethrough,
                Style,
                Table,
                TableCaption,
                TableCellProperties,
                TableColumnResize,
                TableLayout,
                TableProperties,
                TableToolbar,
                Template,
                TextTransformation,
                Underline
            ],
            // ai: {
            //     openAI: {
            //         requestHeaders: {
            //             Authorization: 'Bearer ' + AI_API_KEY
            //         }
            //     }
            // },
            balloonToolbar: ['aiAssistant', '|', 'bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
            // cloudServices: {
            //     tokenUrl: CLOUD_SERVICES_TOKEN_URL
            // },
            exportInlineStyles: {
                stylesheets: [
                    /* This path should point to the content stylesheets on your assets server. */
                    /* See: https://ckeditor.com/docs/ckeditor5/latest/features/export-with-inline-styles.html */
                    './app.component.css',
                    /* Export inline styles needs access to stylesheets that style the content. */
                    'https://cdn.ckeditor.com/ckeditor5/45.2.1/ckeditor5.css',
                    'https://cdn.ckeditor.com/ckeditor5-premium-features/45.2.1/ckeditor5-premium-features.css'
                ],
                transformations: getEmailInlineStylesTransformations()
            },
            fontBackgroundColor: {
                colorPicker: {
                    format: 'hex'
                },
                colors: DEFAULT_HEX_COLORS
            },
            fontColor: {
                colorPicker: {
                    format: 'hex'
                },
                colors: DEFAULT_HEX_COLORS
            },
            fontFamily: {
                supportAllValues: true
            },
            fontSize: {
                options: [10, 12, 14, 'default', 18, 20, 22],
                supportAllValues: true
            },
            heading: {
                options: [
                    {
                        model: 'paragraph',
                        title: 'Paragraph',
                        class: 'ck-heading_paragraph'
                    },
                    {
                        model: 'heading1',
                        view: 'h1',
                        title: 'Heading 1',
                        class: 'ck-heading_heading1'
                    },
                    {
                        model: 'heading2',
                        view: 'h2',
                        title: 'Heading 2',
                        class: 'ck-heading_heading2'
                    },
                    {
                        model: 'heading3',
                        view: 'h3',
                        title: 'Heading 3',
                        class: 'ck-heading_heading3'
                    },
                    {
                        model: 'heading4',
                        view: 'h4',
                        title: 'Heading 4',
                        class: 'ck-heading_heading4'
                    },
                    {
                        model: 'heading5',
                        view: 'h5',
                        title: 'Heading 5',
                        class: 'ck-heading_heading5'
                    },
                    {
                        model: 'heading6',
                        view: 'h6',
                        title: 'Heading 6',
                        class: 'ck-heading_heading6'
                    }
                ]
            },
            htmlSupport: {
                allow: [
                    {
                        name: /^(div|table|tbody|tr|td|span|img|h1|h2|h3|p|a)$/,
                        styles: true,
                        attributes: true,
                        classes: true
                    }
                ]
            },
            image: {
                toolbar: ['imageTextAlternative', '|', 'imageStyle:inline', 'imageStyle:alignLeft', 'imageStyle:alignRight', '|', 'resizeImage', '|', 'ckboxImageEdit'],
                styles: {
                    options: ['inline', 'alignLeft', 'alignRight']
                }
            },
            initialData:
                '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
            licenseKey: LICENSE_KEY,
            link: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                decorators: {
                    toggleDownloadable: {
                        mode: 'manual',
                        label: 'Downloadable',
                        attributes: {
                            download: 'file'
                        }
                    }
                }
            },
            list: {
                properties: {
                    styles: true,
                    startIndex: true,
                    reversed: false
                }
            },
            mention: {
                feeds: [
                    {
                        marker: '@',
                        feed: [
                            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
                        ]
                    }
                ]
            },
            menuBar: {
                isVisible: true
            },
            mergeFields: {
                /* Read more: https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html#configuration */
            },
            placeholder: 'Type or paste your content here!',
            style: {
                definitions: [
                    {
                        name: 'Article category',
                        element: 'h3',
                        classes: ['category']
                    },
                    {
                        name: 'Title',
                        element: 'h2',
                        classes: ['document-title']
                    },
                    {
                        name: 'Subtitle',
                        element: 'h3',
                        classes: ['document-subtitle']
                    },
                    {
                        name: 'Info box',
                        element: 'p',
                        classes: ['info-box']
                    },
                    {
                        name: 'CTA Link Primary',
                        element: 'a',
                        classes: ['button', 'button--green']
                    },
                    {
                        name: 'CTA Link Secondary',
                        element: 'a',
                        classes: ['button', 'button--black']
                    },
                    {
                        name: 'Marker',
                        element: 'span',
                        classes: ['marker']
                    },
                    {
                        name: 'Spoiler',
                        element: 'span',
                        classes: ['spoiler']
                    }
                ]
            },
            table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
                tableProperties: {
                    borderColors: DEFAULT_HEX_COLORS,
                    backgroundColors: DEFAULT_HEX_COLORS
                },
                tableCellProperties: {
                    borderColors: DEFAULT_HEX_COLORS,
                    backgroundColors: DEFAULT_HEX_COLORS
                }
            },
            template: {
                definitions: [
                    {
                        title: 'Introduction',
                        description: 'Simple introduction to an article',
                        icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="icons/article-image-right">\n        <rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>\n        <g id="page" filter="url(#filter0_d_1_507)">\n            <path d="M9 41H36V12L28 5H9V41Z" fill="white"/>\n            <path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>\n        </g>\n        <g id="image">\n            <path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>\n            <path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>\n            <circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>\n        </g>\n        <rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 25" x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 26" x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 27" x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 28" x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/>\n    </g>\n    <defs>\n        <filter id="filter0_d_1_507" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n            <feOffset dx="1" dy="1"/>\n            <feComposite in2="hardAlpha" operator="out"/>\n            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>\n        </filter>\n    </defs>\n</svg>\n',
                        data: "<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>"
                    }
                ]
            }
        };

        configUpdateAlert(this.config);

        this.isLayoutReady = true;
        this.changeDetector.detectChanges();
    }
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config: any) {
    if ((configUpdateAlert as any).configUpdateAlertShown) {
        return;
    }

    const isModifiedByUser = (currentValue: string | undefined, forbiddenValue: string) => {
        if (currentValue === forbiddenValue) {
            return false;
        }

        if (currentValue === undefined) {
            return false;
        }

        return true;
    };

    const valuesToUpdate = [];

    (configUpdateAlert as any).configUpdateAlertShown = true;

    if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
        valuesToUpdate.push('LICENSE_KEY');
    }

    if (!isModifiedByUser(config.ai?.openAI?.requestHeaders?.Authorization, 'Bearer <YOUR_AI_API_KEY>')) {
        valuesToUpdate.push('AI_API_KEY');
    }

    if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
        valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
    }

    if (valuesToUpdate.length) {
        window.alert(['Please update the following values in your editor config', 'to receive full access to Premium Features:', '', ...valuesToUpdate.map((value) => ` - ${value}`)].join('\n'));
    }
}
