<template>
    <div id="rich-text" class="rich-text">
        <!-- <button @click="execCommand('bold')">加粗</button>
        <button @click="execCommand('underline')">下划线</button> -->
        <div
            class="lake-toolbar lake-toolbar-active"
            data-lake-element="toolbar"
            data-lake_prevent_click_unselect="true"
        >
            <div class="lake-toolbar-content">
                <div class="lake-toolbar-area">
                    <div class="lake-button-set lake-collapse-button">
                        <div class="lake-button-set-trigger">
                            <button accessbilityid="main-card-button" class="lake-button">
                                <span>
                                    <span
                                        class="lake-svg-icon lake-svg-icon-insert"
                                        @click="execCommand('insertFieldset')"
                                    ></span>
                                </span>
                            </button>
                        </div>
                        <div class="lake-button-set-list" data-aspm="card_selector">
                            <div class="lake-toolbar-collapse-description">
                                <div class="description">
                                    输入 <code>⌘</code> + <code>/</code> 快速插入卡片
                                </div>
                            </div>
                            <div
                                class="ant-collapse ant-collapse-icon-position-left lake-toolbar-collapse"
                            >
                                <div
                                    class="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow"
                                >
                                    <div
                                        class="ant-collapse-header"
                                        role="button"
                                        tabindex="-1"
                                        aria-expanded="true"
                                    ></div>
                                    <div
                                        class="ant-collapse-content ant-collapse-content-active"
                                    >
                                        <div class="ant-collapse-content-box">
                                            <span data-lake_prevent_click_unselect="false"
                                                ><input
                                                    type="file"
                                                    accept=".svg, .png, .bmp, .jpg, .jpeg, .gif, .tif, .tiff, .emf, .webp"
                                                    multiple=""
                                                    style="display: none"
                                                />
                                                <div>
                                                    <div
                                                        data-aspm-click="image"
                                                        data-card-category="image"
                                                        accessbilityid="image-card-button"
                                                        class="lake-collapse-list-item"
                                                        data-index="0"
                                                    >
                                                        <div
                                                            class="lake-collapse-item-icon"
                                                        >
                                                            <span
                                                                class="lake-svg-icon lake-svg-icon-insert-image"
                                                            ></span>
                                                        </div>
                                                        <div
                                                            class="lake-collapse-item-text"
                                                        >
                                                            <div
                                                                class="lake-collapse-item-title"
                                                            >
                                                                图片
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></span
                                            >
                                            <div class="larkui-popover-trigger">
                                                <div>
                                                    <div
                                                        data-aspm-click="table"
                                                        data-card-category="table"
                                                        accessbilityid="table-card-button"
                                                        class="lake-collapse-list-item"
                                                        data-index="1"
                                                    >
                                                        <div
                                                            class="lake-collapse-item-icon"
                                                        >
                                                            <span
                                                                class="lake-svg-icon lake-svg-icon-insert-table"
                                                            ></span>
                                                        </div>
                                                        <div
                                                            class="lake-collapse-item-text"
                                                        >
                                                            <div
                                                                class="lake-collapse-item-title"
                                                            >
                                                                表格
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span data-lake_prevent_click_unselect="false"
                                                ><input
                                                    type="file"
                                                    accept=".docx, .doc, .dotx, .dot, .rtf, .txt, .html, .htm, .lake, .lakebook, .lakesheet, .pdf, .xls, .xlsx, .xltx, .xlsm, .xlt, .csv, .pptx, .ppt, .potx, .pot, .ppsx, .pps, .pages, .numbers, .nmbtemplate, .template, .key, .keynote, .kth, .et, .ett, .dps, .dpt, .wps, .wpt, .txt, .md, .mark, .markdown, .xmind, .graffle, .gtemplate, .gstencil, .mindnode, .vpp, .mmap, .mpp, .doc, .docx, .ppt, .pptx, .xls, .xlsm, .xlsx, .dot, .dotx, .pot, .potx, .xlt, .xltx, .pps, .ppsx, .csv, .rtf, .pdf, .rp, .rplib, .psd, .sketch, .graffle, .ai, .mpp, .mpp.zip, .eddx, .edx, .eps, .vsd, .vsdx, .drawio, .xd, .dwg, .key, .keynote, .pages, .numbers, .mindnode, .mindnode.zip, .xmind, .xmind.zip, .mmap, .mmap.zip, .mm, .ipynb, .caj, .svg, .png, .bmp, .jpg, .jpeg, .gif, .tif, .tiff, .emf, .webp, .sketch, .psd, .ai, .rp, .rplib, .aep, .c4d, .fbx, .xd, .eps, .mp4, .mov, .avi, .wmv, .m4a, .m4v, .webm, .flv, .mkv, .mpg, .ts, .mts, .swf, .3gp, .ogg, .aac, .dv, .f4v, .flac, .rmvb, .vob, .asf, .dat, .m2t, .m3u8, .mj2, .mjpeg, .mpe, .mpeg, .qt, .rm, .rmvb, .wmv, .mp3, .mpga, .wav, .m4a, .flac, .zip, .rar, .gz, .tgz, .gzip, .7z, .tar, .jar, .dmg, .pkg, .abap, .ada, .adp, .ahk, .as, .as3, .asc, .ascx, .asm, .asp, .awk, .bash, .bash_login, .bash_logout, .bash_profile, .bashrc, .bat, .bib, .bsh, .build, .builder, .c, .c++, .capfile, .cc, .cfc, .cfm, .cfml, .cl, .clj, .cls, .cmake, .cmd, .coffee, .config, .cpp, .cpt, .cpy, .cs, .cshtml, .cson, .csproj, .css, .ctp, .cxx, .dart, .d, .ddl, .di, .diff, .disco, .dml, .dtd, .dtml, .el, .emakefile, .erb, .erl, .f, .f90, .f95, .fs, .fsi, .fsscript, .fsx, .gemfile, .gemspec, .gitconfig, .go, .groovy, .gvy, .Hcp, .h, .h++, .haml, .handlebars, .hbs, .hh, .hpp, .hrl, .hs, .htc, .hxx, .html, .htm, .idl, .iim, .inc, .inf, .ini, .inl, .ipp, .irbrc, .pug, .jade, .jav, .java, .js, .json, .jsp, .jsx, .l, .less, .lhs, .lisp, .log, .lst, .ltx, .lua, .m, .mak, .make, .manifest, .master, .md, .markdn, .markdown, .mdown, .mkdn, .ml, .mli, .mll, .mly, .mud, .makefile, .nfo, .opml, .osascript, .p, .pas, .patch, .php, .php2, .php3, .php4, .php5, .phtml, .pl, .plx, .perl, .pm, .pod, .pp, .profile, .ps1, .ps1xml, .psd1, .psm1, .pss, .pt, .py, .pyw, .proto, .r, .rake, .rb, .rbx, .rc, .rdf, .re, .reg, .rest, .resw, .resx, .rhtml, .rjs, .rprofile, .rpy, .rs, .rss, .rst, .ruby, .rxml, .s, .sass, .scala, .scm, .sconscript, .sconstruct, .script, .scss, .sgml, .sh, .shtml, .sml, .svn-base, .swift, .sql, .sty, .tcl, .tex, .textile, .tld, .tli, .tmpl, .tpl, .ts, .tsx, .vb, .vi, .vim, .vmg, .webpart, .wsp, .wsdl, .xhtml, .xml, .jmx, .xoml, .xsd, .xslt, .yaml, .yaws, .yml, .zsh, .dwg, .vsd, .vsdm, .vsdx, .vss, .vssm, .vst, .vstm, .vstx, .msi, .chm, .sub, .idx, .sst, .son, .srt, .ssa, .ass, .smi, .psb, .pjs, .stl, .tts, .vsf, .zeg, .ipynb, .msg, .xls, .xlsx, .xlsm, .xltx, .xlt, .csv, .numbers, .ppt, .pptx, .ppsx, .potx, .pot, .key, .mindnode, .mindnode.zip, .mmap, .mmap.zip, .xmind, .xmind.zip"
                                                    multiple=""
                                                    style="display: none"
                                                />
                                                <div>
                                                    <div
                                                        data-aspm-click="file"
                                                        data-card-category="file"
                                                        accessbilityid="file-card-button"
                                                        class="lake-collapse-list-item"
                                                        data-index="2"
                                                    >
                                                        <div
                                                            class="lake-collapse-item-icon"
                                                        >
                                                            <span
                                                                class="lake-svg-icon lake-svg-icon-insert-file"
                                                            ></span>
                                                        </div>
                                                        <div
                                                            class="lake-collapse-item-text"
                                                        >
                                                            <div
                                                                class="lake-collapse-item-title"
                                                            >
                                                                附件
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></span
                                            >
                                            <div>
                                                <div
                                                    data-aspm-click="calendar"
                                                    data-card-category="calendar"
                                                    accessbilityid="calendar-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="3"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-calendar"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            日历
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="codeblock"
                                                    data-card-category="codeblock"
                                                    accessbilityid="codeblock-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="4"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-codeblock"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            代码块
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="math"
                                                    data-card-category="math"
                                                    accessbilityid="math-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="5"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-math"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            公式
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="mindmap"
                                                    data-card-category="mindmap"
                                                    accessbilityid="mindmap-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="6"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-mindmap"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            思维导图
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="flowchart"
                                                    data-card-category="flowchart"
                                                    accessbilityid="flowchart-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="7"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-flowchart"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            流程图
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="diagram"
                                                    data-card-category="diagram"
                                                    accessbilityid="diagram-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="8"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-puml"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            文本绘图
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="lockedtext"
                                                    data-card-category="lockedtext"
                                                    accessbilityid="lockedtext-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="9"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-lockedtext"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            加密文本
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="label"
                                                    data-card-category="label"
                                                    accessbilityid="label-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="10"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-label"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            标签
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    data-aspm-click="vote"
                                                    data-card-category="vote"
                                                    accessbilityid="vote-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="11"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-vote"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            投票
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="ant-collapse-item ant-collapse-item-active ant-collapse-item-disabled ant-collapse-no-arrow"
                                >
                                    <div
                                        class="ant-collapse-header"
                                        role="button"
                                        tabindex="-1"
                                        aria-expanded="true"
                                    >
                                        引入
                                    </div>
                                    <div
                                        class="ant-collapse-content ant-collapse-content-active"
                                    >
                                        <div class="ant-collapse-content-box">
                                            <div>
                                                <div
                                                    data-aspm-click="yuque"
                                                    data-card-category="yuque"
                                                    accessbilityid="yuque-card-button"
                                                    class="lake-collapse-list-item"
                                                    data-index="0"
                                                >
                                                    <div class="lake-collapse-item-icon">
                                                        <span
                                                            class="lake-svg-icon lake-svg-icon-insert-yuque"
                                                        ></span>
                                                    </div>
                                                    <div class="lake-collapse-item-text">
                                                        <div
                                                            class="lake-collapse-item-title"
                                                        >
                                                            语雀内容
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="larkui-popover-trigger">
                                                <div>
                                                    <div
                                                        data-aspm-click="localdoc"
                                                        data-card-category="localdoc"
                                                        accessbilityid="localdoc-card-button"
                                                        class="lake-collapse-list-item"
                                                        data-index="1"
                                                    >
                                                        <div
                                                            class="lake-collapse-item-icon"
                                                        >
                                                            <span
                                                                class="lake-svg-icon lake-svg-icon-insert-local-doc"
                                                            ></span>
                                                        </div>
                                                        <div
                                                            class="lake-collapse-item-text"
                                                        >
                                                            <div
                                                                class="lake-collapse-item-title"
                                                            >
                                                                本地文件
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="larkui-popover-trigger">
                                                <div>
                                                    <div
                                                        data-aspm-click="thirdparty"
                                                        data-card-category="thirdparty"
                                                        accessbilityid="thirdparty-card-button"
                                                        class="lake-collapse-list-item"
                                                        data-index="2"
                                                    >
                                                        <div
                                                            class="lake-collapse-item-icon"
                                                        >
                                                            <span
                                                                class="lake-svg-icon lake-svg-icon-insert-thirdparty"
                                                            ></span>
                                                        </div>
                                                        <div
                                                            class="lake-collapse-item-text"
                                                        >
                                                            <div
                                                                class="lake-collapse-item-title"
                                                            >
                                                                第三方服务
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lake-toolbar-area">
                    <button accessbilityid="main-save-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-save"></span
                        ></span></button
                    ><button accessbilityid="main-undo-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-undo"></span
                        ></span></button
                    ><button
                        accessbilityid="main-redo-button"
                        class="lake-button lake-button-disabled"
                    >
                        <span
                            ><span class="lake-icon lake-icon-redo"></span
                        ></span></button
                    ><button accessbilityid="main-paintformat-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-paintformat"></span
                        ></span></button
                    ><button
                        accessbilityid="main-removeformat-button"
                        class="lake-button"
                    >
                        <span><span class="lake-icon lake-icon-clean"></span></span>
                    </button>
                </div>
                <div class="lake-toolbar-area">
                    <div class="lake-button-set">
                        <div class="lake-button-set-trigger">
                            <button
                                accessbilityid="main-heading-button"
                                class="lake-button lake-button-heading"
                            >
                                <span class="lake-button-inner-text">正文</span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list lake-button-set-list-with-dot">
                            <a class="lake-button-set-list-item"
                                ><span class="lake-icon lake-icon-dot"></span
                                ><span>正文</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-heading1"
                                ><span>标题 1</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-heading2"
                                ><span>标题 2</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-heading3"
                                ><span>标题 3</span></a
                            >
                            <a
                                class="lake-button-set-list-item lake-button-set-list-item-heading4"
                            >
                                <span>标题 4</span>
                            </a>
                        </div>
                    </div>
                    <div class="lake-button-set">
                        <div class="lake-button-set-trigger">
                            <button
                                accessbilityid="main-fontsize-button"
                                class="lake-button lake-button-fontsize"
                            >
                                <span class="lake-button-inner-text">14px</span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list lake-button-set-list-with-dot">
                            <a class="lake-button-set-list-item"><span>12px</span></a
                            ><a class="lake-button-set-list-item"><span>13px</span></a
                            ><a class="lake-button-set-list-item"
                                ><span class="lake-icon lake-icon-dot"></span
                                ><span>14px</span></a
                            ><a class="lake-button-set-list-item"><span>15px</span></a
                            ><a class="lake-button-set-list-item"><span>16px</span></a
                            ><a class="lake-button-set-list-item"><span>19px</span></a
                            ><a class="lake-button-set-list-item"><span>22px</span></a
                            ><a class="lake-button-set-list-item"><span>24px</span></a
                            ><a class="lake-button-set-list-item"><span>29px</span></a
                            ><a class="lake-button-set-list-item"><span>32px</span></a
                            ><a class="lake-button-set-list-item"><span>40px</span></a
                            ><a class="lake-button-set-list-item"><span>48px</span></a>
                        </div>
                    </div>
                </div>
                <div class="lake-toolbar-area">
                    <button accessbilityid="main-bold-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-bold"></span
                        ></span></button
                    ><button accessbilityid="main-italic-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-italic"></span
                        ></span></button
                    ><button
                        accessbilityid="main-strikethrough-button"
                        class="lake-button"
                    >
                        <span
                            ><span class="lake-icon lake-icon-strikethrough"></span
                        ></span></button
                    ><button accessbilityid="main-underline-button" class="lake-button">
                        <span><span class="lake-icon lake-icon-underline"></span></span>
                    </button>
                    <div class="lake-button-set">
                        <div class="lake-button-set-trigger">
                            <button
                                accessbilityid="main-moremark-button"
                                class="lake-button lake-button-icon-list"
                            >
                                <span
                                    ><span
                                        class="lake-icon lake-icon-moremark"
                                    ></span></span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list lake-button-set-list-with-dot">
                            <a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                            >
                                <span>
                                    <span class="lake-icon lake-icon-sup"></span>
                                </span>
                                <span style="font-size: 12px">上标</span>
                            </a>
                            <a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span><span class="lake-icon lake-icon-sub"></span></span
                                ><span style="font-size: 12px">下标</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span
                                    ><span class="lake-icon lake-icon-code"></span></span
                                ><span style="font-size: 12px">行内代码</span></a
                            >
                        </div>
                    </div>
                </div>
                <div class="lake-toolbar-area">
                    <div class="lake-button-set">
                        <div
                            class="lake-button-set-trigger lake-button-set-trigger-double"
                        >
                            <button
                                accessbilityid="main-fontcolor-button"
                                class="lake-button lake-button-current"
                            >
                                <span class="lake-icon lake-icon-svgs"
                                    ><svg width="16px" height="16px" viewBox="0 0 16 16">
                                        <title>color-font</title>
                                        <desc>Created with Sketch.</desc>
                                        <g
                                            id="color-font"
                                            stroke="none"
                                            stroke-width="1"
                                            fill="none"
                                            fill-rule="evenodd"
                                        >
                                            <rect
                                                fill="#F5222D"
                                                id="Rectangle-55"
                                                stroke="#F5222D"
                                                stroke-width="0.5"
                                                x="2"
                                                y="12.75"
                                                width="12"
                                                height="1.5"
                                                rx="0.125"
                                            ></rect>
                                            <path
                                                d="M5.29102819,11.25 L3.96365715,11.25 C3.87952002,11.25 3.8113134,11.1817934 3.8113134,11.0976562 C3.8113134,11.08076 3.81412419,11.0639814 3.81963067,11.0480076 L7.0756112,1.60269506 C7.09679504,1.5412426 7.15463644,1.5 7.21963767,1.5 L8.81868806,1.5 C8.883726,1.5 8.94159158,1.54128846 8.96274706,1.60278951 L12.2118,11.048102 C12.239168,11.1276636 12.1968568,11.2143472 12.1172952,11.2417152 C12.1013495,11.2472004 12.0846037,11.25 12.067741,11.25 L10.6761419,11.25 C10.6099165,11.25 10.5512771,11.2072154 10.531066,11.1441494 L9.69970662,8.55 L6.27433466,8.55 L5.43599205,11.1444975 C5.41567115,11.2073865 5.35711879,11.25 5.29102819,11.25 Z M8.02635163,3.18571429 L7.96199183,3.18571429 L6.63904023,7.30714286 L9.33500105,7.30714286 L8.02635163,3.18571429 Z"
                                                id="A"
                                                fill="#595959"
                                            ></path>
                                        </g></svg
                                ></span></button
                            ><button
                                accessbilityid="main-fontcolor-dropdown-button"
                                class="lake-button lake-button-dropdown"
                            >
                                <span class="lake-icon"></span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list lake-button-set-list-colorboard">
                            <div
                                class="lake-colorboard"
                                data-lake-editor-ui="colorpicker"
                                data-lake_prevent_click_unselect="true"
                            >
                                <div class="lake-color-history">最近使用自定义颜色</div>
                                <div class="lake-none-custom-color">暂无</div>
                                <div class="lake-more-color">
                                    <div class="lake-more-color-container">
                                        <div class="lake-more-color-preview"></div>
                                        <span>更多颜色</span
                                        ><span
                                            class="lake-icon lake-icon-arrow-right"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lake-toolbar-area">
                    <div class="lake-button-set">
                        <div class="lake-button-set-trigger">
                            <button
                                accessbilityid="main-alignment-button"
                                class="lake-button lake-button-icon-list"
                            >
                                <span><span class="lake-icon lake-icon-left"></span></span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list lake-button-set-list-with-dot">
                            <a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span class="lake-icon lake-icon-dot"></span
                                ><span
                                    ><span class="lake-icon lake-icon-left"></span></span
                                ><span style="font-size: 12px">左对齐</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span
                                    ><span
                                        class="lake-icon lake-icon-center"
                                    ></span></span
                                ><span style="font-size: 12px">居中对齐</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span
                                    ><span class="lake-icon lake-icon-right"></span></span
                                ><span style="font-size: 12px">右对齐</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span
                                    ><span
                                        class="lake-icon lake-icon-justify"
                                    ></span></span
                                ><span style="font-size: 12px">两端对齐</span></a
                            >
                        </div>
                    </div>
                </div>
                <div class="lake-toolbar-area">
                    <button
                        accessbilityid="main-unorderedlist-button"
                        class="lake-button"
                    >
                        <span
                            ><span class="lake-icon lake-icon-uList"></span
                        ></span></button
                    ><button accessbilityid="main-orderedlist-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-oList"></span
                        ></span></button
                    ><button accessbilityid="main-tasklist-button" class="lake-button">
                        <span><span class="lake-icon lake-icon-tList"></span></span>
                    </button>
                    <div class="lake-button-set">
                        <div class="lake-button-set-trigger">
                            <button
                                accessbilityid="main-indent-button"
                                class="lake-button lake-button-icon-list"
                            >
                                <span
                                    ><span
                                        class="lake-icon lake-icon-indent-right"
                                    ></span></span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list">
                            <a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span
                                    ><span
                                        class="lake-icon lake-icon-indent-right"
                                    ></span></span
                                ><span style="font-size: 12px">增加缩进</span></a
                            ><a
                                class="lake-button-set-list-item lake-button-set-list-item-icon"
                                ><span
                                    ><span
                                        class="lake-icon lake-icon-indent-left"
                                    ></span></span
                                ><span style="font-size: 12px">减少缩进</span></a
                            >
                        </div>
                    </div>
                    <div class="lake-button-set">
                        <div class="lake-button-set-trigger">
                            <button
                                accessbilityid="main-lineheight-button"
                                class="lake-button lake-button-icon-list lake-button-disabled"
                            >
                                <span
                                    ><span
                                        class="lake-icon lake-icon-line-height"
                                    ></span></span
                                ><span class="lake-icon lake-icon-arrow"></span>
                            </button>
                        </div>
                        <div class="lake-button-set-list lake-button-set-list-with-dot">
                            <a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">默认</span></a
                            ><a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">1</span></a
                            ><a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">1.15</span></a
                            ><a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">1.5</span></a
                            ><a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">2</span></a
                            ><a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">2.5</span></a
                            ><a class="lake-button-set-list-item"
                                ><span></span><span style="font-size: 12px">3</span></a
                            >
                        </div>
                    </div>
                </div>
                <div class="lake-toolbar-area">
                    <button
                        accessbilityid="main-link-button"
                        class="lake-button lake-button-link"
                    >
                        <span
                            ><span class="lake-icon lake-icon-link"></span
                        ></span></button
                    ><button accessbilityid="main-quote-button" class="lake-button">
                        <span
                            ><span class="lake-icon lake-icon-quote"></span
                        ></span></button
                    ><button accessbilityid="main-hr-button" class="lake-button">
                        <span><span class="lake-icon lake-icon-hr"></span></span>
                    </button>
                </div>
                <div class="lake-toolbar-area">
                    <button accessbilityid="main-search-button" class="lake-button">
                        <span
                            ><span
                                class="lake-icon lake-icon-searchreplace"
                                accessbilityid="searchreplace-button"
                            ></span
                        ></span></button
                    ><button accessbilityid="main-translate-button" class="lake-button">
                        <span
                            ><span
                                class="lake-icon lake-icon-translate"
                                accessbilityid="translate-button"
                            ></span
                        ></span></button
                    ><button
                        accessbilityid="main-toc-button"
                        class="lake-button lake-button-active"
                    >
                        <span
                            ><span
                                class="lake-icon lake-icon-toc"
                                accessbilityid="toc-button"
                            ></span
                        ></span></button
                    ><button accessbilityid="main-repository-button" class="lake-button">
                        <span
                            ><span
                                class="lake-svg-icon lake-svg-icon-folder"
                                accessbilityid="repository-button"
                            ></span
                        ></span>
                    </button>
                </div>
            </div>
        </div>

        <div class="lake-content">
            <div class="rich-text-content" contenteditable="true">
                <p>这是可编辑的</p>

                <!-- <textarea ref="textarea"></textarea>
                <el-select class="code-mode-select" v-model="mode" @change="changeMode">
                    <el-option
                        v-for="mode in modes"
                        :key="mode.value"
                        :label="mode.label"
                        :value="mode.value"
                    >
                    </el-option>
                </el-select> -->
            </div>
        </div>
    </div>
</template>

<script src="./richText.js"></script>

<style lang="less" src="./richText.less"></style>
