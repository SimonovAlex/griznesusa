module.exports = ({name, country, city, home, apartment, invoiceNumber, MemberBuyer, vinCode, invoiceDate, lotNumber, street, total, YMM}) => {
    return`
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
<TITLE>INVOICE_Family Great Deals Inc</TITLE>
<META name="generator" content="BCL easyConverter SDK 5.0.210">
<STYLE type="text/css">

body {margin-top: 0px;margin-left: 0px;}

#page_1 {position:relative; overflow: hidden;margin: 22px 0px 55px 0px;padding: 0px;border: none;width: 600px;}

#page_1 #p1dimg1 {position:absolute;top:73px;left:22px;z-index:-1;width:553px;height:450px;}
#page_1 #p1dimg1 #p1img1 {width:553px;height:459px;}




.ft0{font: bold 12px 'Cambria';color: #243f61;line-height: 14px;}
.ft1{font: bold 12px 'Cambria';color: #243f61;line-height: 15px;}
.ft2{font: bold 14px 'Arial';line-height: 15px;}
.ft3{font: bold 12px 'MS Gothic';line-height: 12px;}
.ft4{font: bold 12px 'Arial';line-height: 15px;}
.ft5{font: bold 9px 'Arial Black';line-height: 13px;}
.ft6{font: 9px 'Verdana';line-height: 11px;}
.ft7{font: 1px 'Times New Roman';line-height: 1px;}
.ft8{font: italic 9px 'Trebuchet MS';line-height: 13px;}
.ft9{font: bold 9px 'Times New Roman';color: #4c5357;line-height: 12px;}
.ft10{font: bold 11px 'Verdana';line-height: 13px;}
.ft11{font: 1px 'Times New Roman';line-height: 6px;}
.ft12{font: 9px 'Verdana';line-height: 12px;}
.ft13{font: 9px 'Arial';line-height: 12px;}
.ft14{font: bold 9px 'MS Gothic';line-height: 9px;}
.ft15{font: 9px 'Arial';line-height: 11px;}
.ft16{font: 1px 'Times New Roman';line-height: 5px;}
.ft17{font: italic 9px 'Georgia';line-height: 12px;}
.ft18{font: 1px 'Times New Roman';line-height: 3px;}
.ft19{font: 1px 'Times New Roman';line-height: 2px;}
.ft20{font: 1px 'Times New Roman';line-height: 2px;}
.ft21{font: italic bold 12px 'Arial';line-height: 14px;}
.ft22{font: bold 9px 'Arial';line-height: 11px;}

.p0{text-align: left;padding-left: 22px;margin-top: 0px;margin-bottom: 0px;}
.p1{text-align: left;padding-left: 22px;padding-right: 426px;margin-top: 3px;margin-bottom: 0px;}
.p2{text-align: left;padding-left: 22px;margin-top: 43px;margin-bottom: 0px;}
.p3{text-align: left;padding-left: 22px;margin-top: 5px;margin-bottom: 0px;}
.p4{text-align: left;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p5{text-align: right;padding: 0 0 5px 70px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p6{text-align: left;padding-left: 22px;margin-top: 97px;margin-bottom: 0px;}
.p7{text-align: left;padding-left: 22px;margin-top: 1px;margin-bottom: 0px;}
.p8{text-align: left;padding-left: 22px;margin-top: 4px;margin-bottom: 0px;}
.p9{text-align: left;padding-left: 22px;margin-top: 19px;margin-bottom: 0px;}
.p10{text-align: left;padding-left: 22px;margin-top: 98px;margin-bottom: 0px;}
.p11{text-align: left;padding-left: 32px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p12{text-align: left;padding-left: 62px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p13{text-align: left;padding-left: 42px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p14{text-align: left;padding-left: 35px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p15{text-align: left;padding-left: 23px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p16{text-align: right;padding-right: 51px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p17{text-align: right;padding-right: 35px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p18{text-align: left;padding-left: 2px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p19{text-align: right;padding-right: 1px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p20{text-align: right;padding-right: 2px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p21{text-align: right;padding-right: 148px;margin-top: 55px;margin-bottom: 0px;}
.p22{text-align: left;padding-left: 223px;margin-top: 1px;margin-bottom: 0px;}

.td0{padding: 0px 0px 0px 5px;margin: 0px;width: 112px;vertical-align: bottom;}
.td1{padding: 0px;margin: 0px;width: 91px;vertical-align: bottom;}
.td2{padding: 0px;margin: 0px;width: 0px;vertical-align: bottom;}
.td3{border-left: #000000 1px solid;border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 106px;vertical-align: bottom;background: #bebebe;}
.td4{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;background: #bebebe;}
.td5{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 149px;vertical-align: bottom;background: #bebebe;}
.td6{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 115px;vertical-align: bottom;background: #bebebe;}
.td7{border-left: #000000 1px solid;border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 110px;vertical-align: bottom;background: #bebebe;}
.td8{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;background: #bebebe;}
.td9{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 149px;vertical-align: bottom;background: #bebebe;}
.td10{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 115px;vertical-align: bottom;background: #bebebe;}
.td11{border-left: #000000 1px solid;border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 108px;vertical-align: bottom;}
.td12{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;}
.td13{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 149px;vertical-align: bottom;}
.td14{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 115px;vertical-align: bottom;}
.td15{border-left: #000000 1px solid;border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 110px;vertical-align: bottom;}
.td16{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;}
.td17{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 150px;vertical-align: bottom;}
.td18{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 115px;vertical-align: bottom;}
.td19{padding: 0px;margin: 0px;width: 110px;vertical-align: bottom;}
.td20{padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;}

.tr0{height: 13px;}
.tr1{height: 20px;}
.tr2{height: 15px;}
.tr3{height: 6px;}
.tr4{height: 24px;}
.tr5{height: 30px;}
.tr6{height: 11px;}
.tr7{height: 5px;}
.tr8{height: 12px;}
.tr9{height: 14px;}
.tr10{height: 2px;}
.tr11{height: 3px;}
.tr12{height: 2px;}
.tr13{height: 20px;}
.tr14{height: 21px;}

.t0{width: 203px;margin-left: 22px;margin-top: 31px;font: 9px 'Verdana';}
.t1{width: 540px;margin-left: 28px;margin-top: 17px;font: 9px 'Verdana';}

</STYLE>
</HEAD>

<BODY>
<DIV id="page_1">
<DIV id="p1dimg1">
<IMG src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAG3AtwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9e/8AhZP7U3/RG/gD/wCHi1j/AOZij/hZP7U3/RG/gD/4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf8ARG/gD/4eLWP/AJmKP+Fk/tTf9Eb+AP8A4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP/h4tY/+Zij/AIWT+1N/0Rv4A/8Ah4tY/wDmYr3/AMpfQflR5S+g/KgDwD/hZP7U3/RG/gD/AOHi1j/5mKP+Fk/tTf8ARG/gD/4eLWP/AJmK9/8AKX0H5UeUvoPyoA8A/wCFk/tTf9Eb+AP/AIeLWP8A5mKP+Fk/tTf9Eb+AP/h4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/wBEb+AP/h4tY/8AmYo/4WT+1N/0Rv4A/wDh4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/+Hi1j/5mKP8AhZP7U3/RG/gD/wCHi1j/AOZivf8Ayl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP8A4eLWP/mYo/4WT+1N/wBEb+AP/h4tY/8AmYr3/wApfQflR5S+g/KgDwD/AIWT+1N/0Rv4A/8Ah4tY/wDmYo/4WT+1N/0Rv4A/+Hi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/AERv4A/+Hi1j/wCZij/hZP7U3/RG/gD/AOHi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/RG/gD/4eLWP/mYo/wCFk/tTf9Eb+AP/AIeLWP8A5mK9/wDKX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/wDh4tY/+Zij/hZP7U3/AERv4A/+Hi1j/wCZivf/ACl9B+VHlL6D8qAPAP8AhZP7U3/RG/gD/wCHi1j/AOZij/hZP7U3/RG/gD/4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf8ARG/gD/4eLWP/AJmKP+Fk/tTf9Eb+AP8A4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP/h4tY/+Zij/AIWT+1N/0Rv4A/8Ah4tY/wDmYr3/AMpfQflR5S+g/KgDwD/hZP7U3/RG/gD/AOHi1j/5mKP+Fk/tTf8ARG/gD/4eLWP/AJmK9/8AKX0H5UeUvoPyoA8A/wCFk/tTf9Eb+AP/AIeLWP8A5mKP+Fk/tTf9Eb+AP/h4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/wBEb+AP/h4tY/8AmYo/4WT+1N/0Rv4A/wDh4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/+Hi1j/5mKP8AhZP7U3/RG/gD/wCHi1j/AOZivf8Ayl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP8A4eLWP/mYo/4WT+1N/wBEb+AP/h4tY/8AmYr3/wApfQflR5S+g/KgDwD/AIWT+1N/0Rv4A/8Ah4tY/wDmYo/4WT+1N/0Rv4A/+Hi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/AERv4A/+Hi1j/wCZij/hZP7U3/RG/gD/AOHi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/RG/gD/4eLWP/mYo/wCFk/tTf9Eb+AP/AIeLWP8A5mK9/wDKX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/wDh4tY/+Zij/hZP7U3/AERv4A/+Hi1j/wCZivf/ACl9B+VHlL6D8qAPAP8AhZP7U3/RG/gD/wCHi1j/AOZij/hZP7U3/RG/gD/4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf8ARG/gD/4eLWP/AJmKP+Fk/tTf9Eb+AP8A4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP/h4tY/+Zij/AIWT+1N/0Rv4A/8Ah4tY/wDmYr3/AMpfQflR5S+g/KgDwD/hZP7U3/RG/gD/AOHi1j/5mKP+Fk/tTf8ARG/gD/4eLWP/AJmK9/8AKX0H5UeUvoPyoA8A/wCFk/tTf9Eb+AP/AIeLWP8A5mKP+Fk/tTf9Eb+AP/h4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/wBEb+AP/h4tY/8AmYo/4WT+1N/0Rv4A/wDh4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/+Hi1j/5mKP8AhZP7U3/RG/gD/wCHi1j/AOZivf8Ayl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP8A4eLWP/mYo/4WT+1N/wBEb+AP/h4tY/8AmYr3/wApfQflR5S+g/KgDwD/AIWT+1N/0Rv4A/8Ah4tY/wDmYo/4WT+1N/0Rv4A/+Hi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/AERv4A/+Hi1j/wCZij/hZP7U3/RG/gD/AOHi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/RG/gD/4eLWP/mYo/wCFk/tTf9Eb+AP/AIeLWP8A5mK9/wDKX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/wDh4tY/+Zij/hZP7U3/AERv4A/+Hi1j/wCZivf/ACl9B+VHlL6D8qAPAP8AhZP7U3/RG/gD/wCHi1j/AOZij/hZP7U3/RG/gD/4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf8ARG/gD/4eLWP/AJmKP+Fk/tTf9Eb+AP8A4eLWP/mYr3/yl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP/h4tY/+Zij/AIWT+1N/0Rv4A/8Ah4tY/wDmYr3/AMpfQflR5S+g/KgDwD/hZP7U3/RG/gD/AOHi1j/5mKP+Fk/tTf8ARG/gD/4eLWP/AJmK9/8AKX0H5UeUvoPyoA8A/wCFk/tTf9Eb+AP/AIeLWP8A5mKP+Fk/tTf9Eb+AP/h4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/wBEb+AP/h4tY/8AmYo/4WT+1N/0Rv4A/wDh4tY/+Zivf/KX0H5UeUvoPyoA8A/4WT+1N/0Rv4A/+Hi1j/5mKP8AhZP7U3/RG/gD/wCHi1j/AOZivf8Ayl9B+VHlL6D8qAPAP+Fk/tTf9Eb+AP8A4eLWP/mYo/4WT+1N/wBEb+AP/h4tY/8AmYr3/wApfQflR5S+g/KgDwD/AIWT+1N/0Rv4A/8Ah4tY/wDmYo/4WT+1N/0Rv4A/+Hi1j/5mK9/8pfQflR5S+g/KgDwD/hZP7U3/AERv4A/+Hi1j/wCZij/hZP7U3/RG/gD/AOHi1j/5mK9/8pfQflR5S+g/KgB1FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUBgSfbr7UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUARYC3RZscjCk/qP68+/pUtRzhmPyjP4/Xr/AJNSUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUANP3vyp1NP3vyp1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADT978qdTT978qdQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA0/e/KnU0/e/KnUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUANP3vyp1NP3vyp1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADT978qdTT978qdQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQA0/e/KnU0/e/KnUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFF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" id="p1img1"></DIV>


<P class="p0 ft0">Family Great Deals Inc</P>
<P class="p1 ft1">1587 E 19th St., apart 7I Brooklyn, New York 11230 United States +19174568688</P>
<P class="p2 ft4">SELLER:<SPAN style="padding-left:325px;"><SPAN class="ft2">INVOICE</SPAN><SPAN class="ft3">​</SPAN></SPAN></P>
<P class="p3 ft5">Family Great Deals Inc</P>
<TABLE cellpadding=0 cellspacing=0 class="t0">
<TR>
\t<TD class="tr0 td0"><P class="p4 ft6">Invoice number:</P></TD>
\t<TD class="tr0 td1"><P class="p4 ft6">${invoiceNumber}</P></TD>
</TR>
<TR>
\t<TD class="tr1 td0"><P class="p4 ft8">Invoice date:</P></TD>
\t<TD class="tr1 td1"><P class="p4 ft6">${invoiceDate}</P></TD>
</TR>
</TABLE>
<P class="p6 ft9">Wire Transfer Information:</P>
<P class="p7 ft9">Bank of America</P>
<P class="p7 ft9">Account # 4830 6072 4354</P>
<P class="p7 ft9">Routing # 021000322</P>
<P class="p7 ft9">IBAN # 026009593 (wires)</P>
<P class="p8 ft9">SWIFT Code # BOFAUS3N</P>
<P class="p9 ft4">BILL TO:</P>
<P class="p7 ft9">${name}</P>
<P class="p7 ft9">${country}, ${city},</P>
<P class="p7 ft9">${street} str. bld ${home}, ap. ${apartment}</P>
<P class="p10 ft6">Please detach top portion and return with your payment.</P>
<TABLE cellpadding=0 cellspacing=0 class="t1">
<TR>
\t<TD class="tr2 td2"></TD>
\t<TD class="tr2 td3"><P class="p11 ft10">Service</P></TD>
\t<TD class="tr2 td4"><P class="p12 ft10">Activity</P></TD>
\t<TD class="tr2 td5"><P class="p13 ft10">Price Each</P></TD>
\t<TD class="tr2 td6"><P class="p14 ft10">Amount</P></TD>
</TR>
<TR>
\t<TD class="tr3 td2"></TD>
\t<TD class="tr3 td7"><P class="p4 ft11">&nbsp;</P></TD>
\t<TD class="tr3 td8"><P class="p4 ft11">&nbsp;</P></TD>
\t<TD class="tr3 td9"><P class="p4 ft11">&nbsp;</P></TD>
\t<TD class="tr3 td10"><P class="p4 ft11">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr4 td2"></TD>
\t<TD rowspan=2 class="tr5 td11"><P class="p15 ft12">Delivery</P></TD>
\t<TD class="tr4 td12"><P class="p4 ft12">Transport service<SPAN class="ft13">Auto</SPAN></P></TD>
\t<TD rowspan=2 class="tr5 td13"><P class="p16 ft12">$${total}</P></TD>
\t<TD rowspan=2 class="tr5 td14"><P class="p17 ft12">$${total}</P></TD>
</TR>
<TR>
\t<TD class="tr3 td2"></TD>
\t<TD rowspan=2 class="tr6 td12"><P class="p18 ft15">${YMM}</P></TD>
</TR>
<TR>
\t<TD class="tr7 td2"></TD>
\t<TD class="tr7 td11"><P class="p4 ft16">&nbsp;</P></TD>
\t<TD class="tr7 td13"><P class="p4 ft16">&nbsp;</P></TD>
\t<TD class="tr7 td14"><P class="p4 ft16">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr0 td2"></TD>
\t<TD class="tr0 td11"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr0 td12"><P class="p18 ft13">${vinCode} <SPAN class="ft12">lot#</SPAN><SPAN class="ft14">​</SPAN></P></TD>
\t<TD class="tr0 td13"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr0 td14"><P class="p4 ft7">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr0 td2"></TD>
\t<TD class="tr0 td11"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr0 td12"><P class="p18 ft13">${lotNumber}</P></TD>
\t<TD class="tr0 td13"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr0 td14"><P class="p4 ft7">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr8 td2"></TD>
\t<TD class="tr8 td15"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr8 td16"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr8 td17"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr8 td18"><P class="p4 ft7">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr9 td2"></TD>
\t<TD class="tr9 td19"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr9 td20"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr9 td13"><P class="p19 ft17">Total:</P></TD>
\t<TD class="tr9 td14"><P class="p19 ft12">$${total}</P></TD>
</TR>
<TR>
\t<TD class="tr10 td2"></TD>
\t<TD class="tr11 td19"><P class="p4 ft18">&nbsp;</P></TD>
\t<TD class="tr11 td20"><P class="p4 ft18">&nbsp;</P></TD>
\t<TD class="tr11 td13"><P class="p4 ft18">&nbsp;</P></TD>
\t<TD class="tr10 td18"><P class="p4 ft19">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr2 td2"></TD>
\t<TD class="tr2 td19"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr2 td20"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr2 td13"><P class="p19 ft17">Payment:</P></TD>
\t<TD class="tr2 td14"><P class="p19 ft12"><NOBR>-$0.00</NOBR></P></TD>
</TR>
<TR>
\t<TD class="tr12 td2"></TD>
\t<TD class="tr10 td19"><P class="p4 ft19">&nbsp;</P></TD>
\t<TD class="tr10 td20"><P class="p4 ft19">&nbsp;</P></TD>
\t<TD class="tr10 td13"><P class="p4 ft19">&nbsp;</P></TD>
\t<TD class="tr12 td18"><P class="p4 ft20">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr13 td2"></TD>
\t<TD class="tr14 td19"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr14 td20"><P class="p4 ft7">&nbsp;</P></TD>
\t<TD class="tr14 td13"><P class="p20 ft21">Balance Due:</P></TD>
\t<TD class="tr13 td18"><P class="p19 ft4">$${total}</P></TD>
</TR>
</TABLE>
<!--<P class="p21 ft22">**NO ACCOUNT CASH DEPOSITS ACCEPTED AS PAYMENT METHOD**</P>-->
<!--<P class="p22 ft22">THANK YOU FOR YOUR BUSINESS!</P>-->
</DIV>
</BODY>
</HTML> `
};