module.exports = ({name, country, city, home, apartment, invoiceNumber, MemberBuyer, vinCode, invoiceDate, lotNumber, street, total, YMM}) => {
    return`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
<TITLE>INVOICE_Family Great Deals Inc</TITLE>
<META name="generator" content="BCL easyConverter SDK 5.0.210">
<STYLE type="text/css">

body {margin-top: 0px;margin-left: 0px;}

#page_1 {position:relative; overflow: hidden;margin: 29px 0px 188px 0px;padding: 0px;border: none;width: 795px;}

#page_1 #p1dimg1 {position:absolute;top:129px;left:29px;z-index:-1;width:737px;height:485px;}
#page_1 #p1dimg1 #p1img1 {width:737px;height:485px;}




.ft0{font: bold 16px 'Cambria';color: #243f61;line-height: 22px;}
.ft1{font: bold 16px 'Arial';line-height: 19px;}
.ft2{font: bold 16px 'MS Gothic';line-height: 16px;}
.ft3{font: bold 17px 'Arial';line-height: 19px;}
.ft4{font: bold 13px 'Arial Black';line-height: 18px;}
.ft5{font: 1px 'Times New Roman';line-height: 1px;}
.ft6{font: 12px 'Verdana';line-height: 14px;}
.ft7{font: 15px 'Arial';line-height: 17px;}
.ft8{font: italic 12px 'Trebuchet MS';line-height: 18px;}
.ft9{font: bold 13px 'Times New Roman';color: #4c5357;line-height: 15px;}
.ft10{font: 15px 'Arial';line-height: 21px;}
.ft11{font: bold 14px 'Verdana';line-height: 17px;}
.ft12{font: 1px 'Times New Roman';line-height: 8px;}
.ft13{font: 13px 'Verdana';line-height: 16px;}
.ft14{font: 13px 'Arial';line-height: 16px;}
.ft15{font: bold 13px 'MS Gothic';line-height: 13px;}
.ft16{font: 13px 'Arial';line-height: 15px;}
.ft17{font: 1px 'Times New Roman';line-height: 7px;}
.ft18{font: italic 13px 'Georgia';line-height: 16px;}
.ft19{font: 1px 'Times New Roman';line-height: 4px;}
.ft20{font: 1px 'Times New Roman';line-height: 3px;}
.ft21{font: 1px 'Times New Roman';line-height: 2px;}
.ft22{font: italic bold 16px 'Arial';line-height: 18px;}
.ft23{font: bold 12px 'Arial';line-height: 15px;}

.p0{text-align: left;padding-left: 29px;padding-right: 590px;margin-top: 0px;margin-bottom: 0px;}
.p1{text-align: left;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p2{text-align: left;padding-left: 48px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p3{text-align: left;padding-left: 1px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p4{text-align: left;padding-left: 29px;margin-top: 15px;margin-bottom: 0px;}
.p5{text-align: left;padding-left: 29px;margin-top: 1px;margin-bottom: 0px;}
.p6{text-align: left;padding-left: 29px;margin-top: 6px;margin-bottom: 0px;}
.p7{text-align: left;padding-left: 29px;margin-top: 24px;margin-bottom: 0px;}
.p8{text-align: left;padding-left: 29px;padding-right: 621px;margin-top: 1px;margin-bottom: 0px;}
.p9{text-align: left;padding-left: 29px;margin-top: 64px;margin-bottom: 0px;}
.p10{text-align: left;padding-left: 42px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p11{text-align: left;padding-left: 82px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p12{text-align: left;padding-left: 56px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p13{text-align: left;padding-left: 47px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p14{text-align: left;padding-left: 31px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p15{text-align: right;padding-right: 68px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p16{text-align: right;padding-right: 46px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p17{text-align: left;padding-left: 2px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p18{text-align: right;padding-right: 1px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p19{text-align: right;padding-right: 2px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p20{text-align: right;padding-right: 194px;margin-top: 55px;margin-bottom: 0px;}
.p21{text-align: left;padding-left: 294px;margin-top: 1px;margin-bottom: 0px;}

.td0{padding: 0px;margin: 0px;width: 346px;vertical-align: bottom;}
.td1{padding: 0px;margin: 0px;width: 122px;vertical-align: bottom;}
.td2{padding: 0px;margin: 0px;width: 0px;vertical-align: bottom;}
.td3{border-left: #000000 1px solid;border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 142px;vertical-align: bottom;background: #bebebe;}
.td4{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 225px;vertical-align: bottom;background: #bebebe;}
.td5{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 196px;vertical-align: bottom;background: #bebebe;}
.td6{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 153px;vertical-align: bottom;background: #bebebe;}
.td7{border-left: #000000 1px solid;border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 142px;vertical-align: bottom;background: #bebebe;}
.td8{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 225px;vertical-align: bottom;background: #bebebe;}
.td9{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 196px;vertical-align: bottom;background: #bebebe;}
.td10{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 153px;vertical-align: bottom;background: #bebebe;}
.td11{border-left: #000000 1px solid;border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 142px;vertical-align: bottom;}
.td12{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 225px;vertical-align: bottom;}
.td13{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 196px;vertical-align: bottom;}
.td14{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 153px;vertical-align: bottom;}
.td15{border-left: #000000 1px solid;border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 142px;vertical-align: bottom;}
.td16{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 225px;vertical-align: bottom;}
.td17{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 196px;vertical-align: bottom;}
.td18{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 153px;vertical-align: bottom;}
.td19{padding: 0px;margin: 0px;width: 144px;vertical-align: bottom;}
.td20{padding: 0px;margin: 0px;width: 226px;vertical-align: bottom;}

.tr0{height: 33px;}
.tr1{height: 19px;}
.tr2{height: 63px;}
.tr3{height: 22px;}
.tr4{height: 20px;}
.tr5{height: 8px;}
.tr6{height: 32px;}
.tr7{height: 40px;}
.tr8{height: 15px;}
.tr9{height: 7px;}
.tr10{height: 17px;}
.tr11{height: 16px;}
.tr12{height: 18px;}
.tr13{height: 3px;}
.tr14{height: 4px;}
.tr15{height: 2px;}
.tr16{height: 27px;}
.tr17{height: 28px;}

.t0{width: 468px;margin-left: 29px;margin-top: 51px;font: 12px 'Verdana';}
.t1{width: 720px;margin-left: 37px;margin-top: 23px;font: 13px 'Verdana';}

</STYLE>
</HEAD>

<BODY>
<DIV id="page_1">
<DIV id="p1dimg1">
<IMG src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAHkAuEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+Jo/4QTwf/0Kmh/+C6H/AOJroKKAOf8A+EE8H/8AQqaH/wCC6H/4mj/hBPB//QqaH/4Lof8A4mugooA5/wD4QTwf/wBCpof/AILof/iaP+EE8H/9Cpof/guh/wDia6CigDn/APhBPB//AEKmh/8Aguh/+JoroKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKz9O1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexo07WrDV/N+wXKzeVjfhSMZzjqPY0AaFFZ+na1Yav5v2C5Wbysb8KRjOcdR7GjTtasNX837BcrN5WN+FIxnOOo9jQBoUVn6drVhq/m/YLlZvKxvwpGM5x1HsaNO1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexo07WrDV/N+wXKzeVjfhSMZzjqPY0AaFFZ+na1Yav5v2C5Wbysb8KRjOcdR7GjTtasNX837BcrN5WN+FIxnOOo9jQBoUVn6drVhq/m/YLlZvKxvwpGM5x1HsaNO1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexo07WrDV/N+wXKzeVjfhSMZzjqPY0AaFFZ+na1Yav5v2C5Wbysb8KRjOcdR7GjTtasNX837BcrN5WN+FIxnOOo9jQBoUVn6drVhq/m/YLlZvKxvwpGM5x1HsaNO1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexo07WrDV/N+wXKzeVjfhSMZzjqPY0AaFFZ/wDbVh/ZX9qfaV+xf89dpx97b6Z68dKz7nxDJbaadVjSG800t/rEYxuo3bfusMHnjqPpQB0FFcoPH+jyWcsqvKkyqdkMifM57Yxkcn3q1pOtu2hyapqM6Lalv3chi2nGdvIUt/FwOc+tAHQ0Vn/21Yf2V/an2lfsX/PXacfe2+mevHSj+2rD+yv7U+0r9i/567Tj7230z146UAaFFZ+na1Yav5v2C5Wbysb8KRjOcdR7GjTtasNX837BcrN5WN+FIxnOOo9jQBoUVn6drVhq/m/YLlZvKxvwpGM5x1HsaNO1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexo07WrDV/N+wXKzeVjfhSMZzjqPY0AaFFZ+na1Yav5v2C5Wbysb8KRjOcdR7GjTtasNX837BcrN5WN+FIxnOOo9jQBoUVn6drVhq/m/YLlZvKxvwpGM5x1HsaNO1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexo07WrDV/N+wXKzeVjfhSMZzjqPY0AaFFZ+na1Yav5v2C5Wbysb8KRjOcdR7GjTtasNX837BcrN5WN+FIxnOOo9jQBoUVn6drVhq/m/YLlZvKxvwpGM5x1HsaNO1qw1fzfsFys3lY34UjGc46j2NAGhRWfp2tWGr+b9guVm8rG/CkYznHUexottasLyxmvre5D20O7zJApG3AyeCM9KANCisWLXBqXmPoslveCEDzYn3RkE5xhsH06Y/Gs60+IGkTsEuPOtWxyXUMufQFSc/lQB1dFc1ofiCfW9Vufs7A2UXBDRbSP7pB3ZJOCeV4rV07WrDVvM+w3KzeXjfhSMZ6dR7GgDQorP07WrDVjL9huRN5WN+FI256dR7GjTtasNWMv2G5E3lY34Ujbnp1HsaANCis/TtasNWMv2G5E3lY34Ujbnp1HsaNO1qw1Yy/YbkTeVjfhSNuenUexoA0KKz9O1qw1Yy/YbkTeVjfhSNuenUexo07WrDVjL9huRN5WN+FI256dR7GgDQorP07WrDVjL9huRN5WN+FI256dR7GjTtasNWMv2G5E3lY34Ujbnp1HsaANCis/TtasNWMv2G5E3lY34Ujbnp1HsaNO1qw1Yy/YbkTeVjfhSNuenUexoA0KKz9O1qw1Yy/YbkTeVjfhSNuenUexo07WrDVjL9huRN5WN+FI256dR7GgDQorP07WrDVjL9huRN5WN+FI256dR7GjTtasNWMv2G5E3lY34Ujbnp1HsaANCis/TtasNWMv2G5E3lY34Ujbnp1HsaNO1qw1Yy/YbkTeVjfhSNuenUexoA0KKyI/EukzWtxdRXqtDblfNbY3y7jgdu5qbVNZsdJRPtl2kDSg+WXUsCR16fUUAaNFc5qfiaTQZYl1SzzHKG8uW2fcWI65Vsbeo7n8ao6h47082SGxuHE0hAOYcmMeuCQCegHJoA7GisibW4NKtLU6zcRwTyrzhSQSMZxjPqO9T6jrNhpPlfbrgQ+bnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaT5f225EIlzsypOcYz0HuKNR1mw0ny/ttyIRLnZlSc4xnoPcUAaFFZ+o6zYaSYhfXIh87Pl5UnOMZ6A+orQoAKKKKACkwPSiigAwPSjA9KKKADA9KMD0oooAMD0owPSiigAwPSjA9KKKADA9KMD0oooAMD0owPSiigAwPSjA9KKKADA9KMD0oooAMD0owPSiigAwPSjA9KKKAFrIexXVDL9qnnMAYp5Eb7EI6clcMeOxOPaiijqHQWbQNK/s2W0WxgWFlyQqDOcdc9c+9Zfge7a8064LIsaxyKiIhO1QFHTJOKKKF1DsdVRRRQAmB6UYHpRRQAYHpRgelFFABgelGB6UUUAGB6UYHpRRQAYHpRgelFFABgelGB6UUUAGB6UYHpRRQAYHpRgelFFABgelGB6UUUAZ11HJdXn2VbiWCMKGJhIDN14yQSPwwfei20HS7Xe0dlGzyZ3vJmRmz1yzZNFFJbAc/pKxWHjW70y1hSG3RGl+TILE7Tg84wM8ccV2IAx0oopoOoYHpRgelFFABgelGB6UUUAGB6UYHpRRQAYHpRgelFFABgelGB6UUUAGB6UYHpRRQAYHpRgelFFABgelGB6UUUAGB6UyZisTkdQpP6UUUAZQ0W11GOOfUWmvG4dUlfCL/wBcKevcGqHiuwsLTR1vI7C28y0ZTENmBjONpxjjnOKKKT2BbmtoUj3Gh2UsrMzvCpYsSSfxPNaOB6UUUxIMD0owPSiigYYHpRgelFFABgelGB6UUUAGB6UYHpRRQAYHpRgelFFABgelGB6UUUAGB6UYHpRRQAYHpRgelFFABgelGB6UUUAGB6UtFFABRRRQB//9k=" id="p1img1"></DIV>


<P class="p0 ft0">Family Great Deals Inc 1587 E 19th St., apart 7I Brooklyn NY 11230 United States +19174568688</P>
<TABLE cellpadding=0 cellspacing=0 class="t0">
<TR>
	<TD class="tr0 td0"><P class="p1 ft1">SELLER:</P></TD>
	<TD class="tr0 td1"><P class="p2 ft3">INVOICE<SPAN class="ft2">​</SPAN></P></TD>
</TR>
<TR>
	<TD class="tr1 td0"><P class="p1 ft4">Family Great Deals Inc</P></TD>
	<TD class="tr1 td1"><P class="p1 ft5">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr2 td0"><P class="p3 ft6">Invoice number:</P></TD>
	<TD class="tr2 td1"><P class="p1 ft7">Invoice number</P></TD>
</TR>
<TR>
	<TD class="tr3 td0"><P class="p3 ft8">Invoice date:</P></TD>
	<TD class="tr3 td1"><P class="p1 ft6">data</P></TD>
</TR>
</TABLE>
<P class="p4 ft9">Wire Transfer Information:</P>
<P class="p5 ft9">Bank of America</P>
<P class="p5 ft9">Account # 4830 6072 4354</P>
<P class="p5 ft9">Routing # 021000322</P>
<P class="p5 ft9">IBAN # 026009593 (wires)</P>
<P class="p6 ft9">SWIFT Code # BOFAUS3N</P>
<P class="p7 ft1">BILL TO:</P>
<P class="p8 ft10">Саша Симонов Украина , Odesa , Kyznec str. bld ф , ap.</P>
<P class="p9 ft6">Please detach top portion and return with your payment.</P>
<TABLE cellpadding=0 cellspacing=0 class="t1">
<TR>
	<TD class="tr4 td2"></TD>
	<TD class="tr4 td3"><P class="p10 ft11">Service</P></TD>
	<TD class="tr4 td4"><P class="p11 ft11">Activity</P></TD>
	<TD class="tr4 td5"><P class="p12 ft11">Price Each</P></TD>
	<TD class="tr4 td6"><P class="p13 ft11">Amount</P></TD>
</TR>
<TR>
	<TD class="tr5 td2"></TD>
	<TD class="tr5 td7"><P class="p1 ft12">&nbsp;</P></TD>
	<TD class="tr5 td8"><P class="p1 ft12">&nbsp;</P></TD>
	<TD class="tr5 td9"><P class="p1 ft12">&nbsp;</P></TD>
	<TD class="tr5 td10"><P class="p1 ft12">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr6 td2"></TD>
	<TD rowspan=2 class="tr7 td11"><P class="p14 ft13">Delivery</P></TD>
	<TD class="tr6 td12"><P class="p1 ft13">Transport service <SPAN class="ft14">2010</SPAN><SPAN class="ft15">​ </SPAN><SPAN class="ft14">Auto</SPAN></P></TD>
	<TD rowspan=2 class="tr7 td13"><P class="p15 ft13">$1327.00</P></TD>
	<TD rowspan=2 class="tr7 td14"><P class="p16 ft13">$1327.00</P></TD>
</TR>
<TR>
	<TD class="tr5 td2"></TD>
	<TD rowspan=2 class="tr8 td12"><P class="p17 ft16">MITSUBISHI OUTLANDER GT</P></TD>
</TR>
<TR>
	<TD class="tr9 td2"></TD>
	<TD class="tr9 td11"><P class="p1 ft17">&nbsp;</P></TD>
	<TD class="tr9 td13"><P class="p1 ft17">&nbsp;</P></TD>
	<TD class="tr9 td14"><P class="p1 ft17">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr10 td2"></TD>
	<TD class="tr10 td11"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr10 td12"><P class="p17 ft14">JA4JT5AX0AZ003847 <SPAN class="ft13">lot#</SPAN><SPAN class="ft15">​</SPAN></P></TD>
	<TD class="tr10 td13"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr10 td14"><P class="p1 ft5">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr10 td2"></TD>
	<TD class="tr10 td11"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr10 td12"><P class="p17 ft14">25993052</P></TD>
	<TD class="tr10 td13"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr10 td14"><P class="p1 ft5">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr11 td2"></TD>
	<TD class="tr11 td15"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr11 td16"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr11 td17"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr11 td18"><P class="p1 ft5">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr12 td2"></TD>
	<TD class="tr12 td19"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr12 td20"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr12 td13"><P class="p18 ft18">Total:</P></TD>
	<TD class="tr12 td14"><P class="p18 ft13">$1327.00</P></TD>
</TR>
<TR>
	<TD class="tr13 td2"></TD>
	<TD class="tr14 td19"><P class="p1 ft19">&nbsp;</P></TD>
	<TD class="tr14 td20"><P class="p1 ft19">&nbsp;</P></TD>
	<TD class="tr14 td13"><P class="p1 ft19">&nbsp;</P></TD>
	<TD class="tr13 td18"><P class="p1 ft20">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr1 td2"></TD>
	<TD class="tr1 td19"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr1 td20"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr1 td13"><P class="p18 ft18">Payment:</P></TD>
	<TD class="tr1 td14"><P class="p18 ft13"><NOBR>-$0.00</NOBR></P></TD>
</TR>
<TR>
	<TD class="tr15 td2"></TD>
	<TD class="tr13 td19"><P class="p1 ft20">&nbsp;</P></TD>
	<TD class="tr13 td20"><P class="p1 ft20">&nbsp;</P></TD>
	<TD class="tr13 td13"><P class="p1 ft20">&nbsp;</P></TD>
	<TD class="tr15 td18"><P class="p1 ft21">&nbsp;</P></TD>
</TR>
<TR>
	<TD class="tr16 td2"></TD>
	<TD class="tr17 td19"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr17 td20"><P class="p1 ft5">&nbsp;</P></TD>
	<TD class="tr17 td13"><P class="p19 ft22">Balance Due:</P></TD>
	<TD class="tr16 td18"><P class="p18 ft1">$1327.00</P></TD>
</TR>
</TABLE>
<P class="p20 ft23">**NO ACCOUNT CASH DEPOSITS ACCEPTED AS PAYMENT METHOD**</P>
<P class="p21 ft23">THANK YOU FOR YOUR BUSINESS!</P>
</DIV>
</BODY>
</HTML>
 `
};