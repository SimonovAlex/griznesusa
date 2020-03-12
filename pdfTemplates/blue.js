module.exports = ({name, country, city, home, apartment, invoiceNumber, MemberBuyer, vinCode, invoiceDate, lotNumber, street, total, YMM}) => {
    return`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
<TITLE>Invoice_10_2020-03-05</TITLE>
<META name="generator" content="BCL easyConverter SDK 5.0.210">
<STYLE type="text/css">

body {margin-top: 0px;margin-left: 0px;}

#page_1 {position:relative; overflow: hidden;margin: 1px 0px 49px 0px;padding: 0px;border: none;width: 816px;}

#page_1 #p1dimg1 {position:absolute;top:924px;left:0px;z-index:-1;width:816px;height:1px;font-size: 1px;line-height:inherit;}
#page_1 #p1dimg1 #p1img1 {width:816px;height:1px;}




.ft0{font: 29px 'Arial';line-height: 33px;}
.ft1{font: 13px 'Arial';line-height: 16px;}
.ft2{font: 1px 'Arial';line-height: 16px;}
.ft3{font: 1px 'Arial';line-height: 1px;}
.ft4{font: 13px 'Arial';color: #8c959a;line-height: 16px;}
.ft5{font: bold 13px 'Arial';color: #4c5357;line-height: 16px;}
.ft6{font: 13px 'Arial';color: #4c5357;line-height: 16px;}
.ft7{font: 1px 'Arial';line-height: 2px;}
.ft8{font: bold 13px 'Arial';color: #4c5357;line-height: 15px;}
.ft9{font: 1px 'Arial';line-height: 15px;}
.ft10{font: 1px 'Arial';line-height: 7px;}
.ft11{font: 1px 'Arial';line-height: 5px;}
.ft12{font: bold 13px 'Arial';color: #b3b9bc;line-height: 16px;}
.ft13{font: 1px 'Arial';line-height: 13px;}
.ft14{font: 13px 'Arial';color: #808080;line-height: 16px;}
.ft15{font: bold 13px 'Arial';line-height: 16px;}
.ft16{font: 13px 'Arial';line-height: 14px;}

.p0{text-align: left;padding-left: 29px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p1{text-align: left;padding-left: 84px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p2{text-align: right;padding-right: 77px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p3{text-align: left;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p4{text-align: right;padding-right: 4px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p5{text-align: right;padding-right: 98px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p6{text-align: right;padding-right: 54px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p7{text-align: center;padding-left: 55px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p8{text-align: right;padding-right: 19px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p9{text-align: left;padding-left: 57px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p10{text-align: center;padding-left: 54px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p11{text-align: right;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p12{text-align: right;padding-right: 23px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p13{text-align: left;padding-left: 29px;margin-top: 3px;margin-bottom: 0px;}
.p14{text-align: left;padding-left: 29px;margin-top: 2px;margin-bottom: 0px;}
.p15{text-align: left;padding-left: 29px;margin-top: 1px;margin-bottom: 0px;}
.p16{text-align: left;padding-left: 218px;margin-top: 234px;margin-bottom: 0px;}
.p17{text-align: left;padding-left: 35px;margin-top: 59px;margin-bottom: 0px;}
.p18{text-align: left;padding-left: 35px;margin-top: 0px;margin-bottom: 0px;}

.td0{padding: 0px;margin: 0px;width: 0px;vertical-align: bottom;}
.td1{padding: 0px;margin: 0px;width: 533px;vertical-align: bottom;background: #1fcaf0;}
.td2{padding: 0px;margin: 0px;width: 283px;vertical-align: bottom;background: #20a2c0;}
.td3{padding: 0px;margin: 0px;width: 298px;vertical-align: bottom;}
.td4{padding: 0px;margin: 0px;width: 227px;vertical-align: bottom;}
.td5{padding: 0px;margin: 0px;width: 147px;vertical-align: bottom;}
.td6{padding: 0px;margin: 0px;width: 117px;vertical-align: bottom;}
.td7{padding: 0px;margin: 0px;width: 27px;vertical-align: bottom;}
.td8{padding: 0px;margin: 0px;width: 291px;vertical-align: bottom;}
.td9{padding: 0px;margin: 0px;width: 144px;vertical-align: bottom;}
.td10{border-bottom: #dee1e2 1px solid;padding: 0px;margin: 0px;width: 298px;vertical-align: bottom;}
.td11{border-bottom: #dee1e2 1px solid;padding: 0px;margin: 0px;width: 227px;vertical-align: bottom;}
.td12{border-bottom: #dee1e2 1px solid;padding: 0px;margin: 0px;width: 147px;vertical-align: bottom;}
.td13{border-bottom: #dee1e2 1px solid;padding: 0px;margin: 0px;width: 117px;vertical-align: bottom;}
.td14{border-bottom: #dee1e2 1px solid;padding: 0px;margin: 0px;width: 27px;vertical-align: bottom;}

.tr0{height: 71px;}
.tr1{height: 88px;}
.tr2{height: 17px;}
.tr3{height: 33px;}
.tr4{height: 16px;}
.tr5{height: 49px;}
.tr6{height: 21px;}
.tr7{height: 19px;}
.tr8{height: 2px;}
.tr9{height: 15px;}
.tr10{height: 22px;}
.tr11{height: 7px;}
.tr12{height: 27px;}
.tr13{height: 5px;}
.tr14{height: 13px;}
.tr15{height: 26px;}
.tr16{height: 40px;}
.tr17{height: 32px;}
.tr18{height: 20px;}
.tr19{height: 56px;}

.t0{width: 816px;font: 29px 'Arial';}
.t1{width: 816px;margin-top: 37px;font: 13px 'Arial';color: #4c5357;}

</STYLE>
</HEAD>

<BODY>
<DIV id="page_1">
<DIV id="p1dimg1">
<IMG src="data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAzADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2CiiimSFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z" id="p1img1"></DIV>


<TABLE cellpadding=0 cellspacing=0 class="t0">
<TR>
\t<TD class="tr0 td0"></TD>
\t<TD rowspan=2 class="tr1 td1"><P class="p0 ft0">INVOICE</P></TD>
\t<TD class="tr0 td2"><P class="p1 ft1">Amount Due (USD)</P></TD>
</TR>
<TR>
\t<TD class="tr2 td0"></TD>
\t<TD rowspan=2 class="tr3 td2"><P class="p2 ft0">$${total}</P></TD>
</TR>
<TR>
\t<TD class="tr4 td0"></TD>
\t<TD class="tr4 td1"><P class="p3 ft2">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr5 td0"></TD>
\t<TD class="tr5 td1"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr5 td2"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
</TABLE>
<TABLE cellpadding=0 cellspacing=0 class="t1">
<TR>
\t<TD rowspan=2 class="tr6 td3"><P class="p0 ft4">BILL TO</P></TD>
\t<TD class="tr7 td4"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr7 td5"><P class="p4 ft5">Invoice Number:</P></TD>
\t<TD class="tr7 td6"><P class="p5 ft6">${invoiceNumber}</P></TD>
\t<TD class="tr7 td7"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr8 td4"><P class="p3 ft7">&nbsp;</P></TD>
\t<TD class="tr8 td5"><P class="p3 ft7">&nbsp;</P></TD>
\t<TD class="tr8 td6"><P class="p3 ft7">&nbsp;</P></TD>
\t<TD class="tr8 td7"><P class="p3 ft7">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr9 td3"><P class="p0 ft8">${name}</P></TD>
\t<TD class="tr9 td4"><P class="p3 ft9">&nbsp;</P></TD>
\t<TD colspan=3 rowspan=2 class="tr10 td8"><P class="p6 ft5">Invoice Date: <SPAN class="ft6">${invoiceDate}</SPAN></P></TD>
</TR>
<TR>
\t<TD class="tr11 td3"><P class="p3 ft10">&nbsp;</P></TD>
\t<TD class="tr11 td4"><P class="p3 ft10">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr10 td3"><P class="p0 ft6"></P></TD>
\t<TD class="tr10 td4"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD colspan=3 rowspan=2 class="tr12 td8"><P class="p6 ft5">Payment Due: <SPAN class="ft6">${invoiceDate}</SPAN></P></TD>
</TR>
<TR>
\t<TD class="tr13 td3"><P class="p3 ft11">&nbsp;</P></TD>
\t<TD class="tr13 td4"><P class="p3 ft11">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr3 td3"><P class="p0 ft12">Service</P></TD>
\t<TD class="tr3 td4"><P class="p7 ft12">Activity</P></TD>
\t<TD class="tr3 td5"><P class="p8 ft12">Price Each</P></TD>
\t<TD colspan=2 class="tr3 td9"><P class="p9 ft12">Amount</P></TD>
</TR>
<TR>
\t<TD class="tr14 td10"><P class="p3 ft13">&nbsp;</P></TD>
\t<TD class="tr14 td11"><P class="p3 ft13">&nbsp;</P></TD>
\t<TD class="tr14 td12"><P class="p3 ft13">&nbsp;</P></TD>
\t<TD class="tr14 td13"><P class="p3 ft13">&nbsp;</P></TD>
\t<TD class="tr14 td14"><P class="p3 ft13">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr15 td3"><P class="p0 ft5">Payment for good</P></TD>
\t<TD class="tr15 td4">
<P class="p10 ft6">${vinCode}</P>
<P class="p10 ft6">${YMM}</P>
<P class="p10 ft6">${lotNumber}</P>
</TD>
\t<TD class="tr15 td5"><P class="p8 ft6">$${total}</P></TD>
\t<TD class="tr15 td6"><P class="p11 ft6">$${total}</P></TD>
\t<TD class="tr15 td7"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
<!--<TR>-->
<!--\t<TD class="tr14 td10"><P class="p3 ft13">&nbsp;</P></TD>-->
<!--\t<TD class="tr14 td11"><P class="p3 ft13">&nbsp;</P></TD>-->
<!--\t<TD class="tr14 td12"><P class="p3 ft13">&nbsp;</P></TD>-->
<!--\t<TD class="tr14 td13"><P class="p3 ft13">&nbsp;</P></TD>-->
<!--\t<TD class="tr14 td14"><P class="p3 ft13">&nbsp;</P></TD>-->
<!--</TR>-->
<TR>
\t<TD class="tr17 td3"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr17 td4"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr17 td5"><P class="p12 ft5">Total:</P></TD>
\t<TD class="tr17 td6"><P class="p11 ft6">$${total}</P></TD>
\t<TD class="tr17 td7"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr6 td3"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr6 td4"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr18 td12"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr18 td13"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr6 td7"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr3 td3"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr3 td4"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr3 td5"><P class="p12 ft5">Amount Due (USD):</P></TD>
\t<TD class="tr3 td6"><P class="p11 ft5">$${total}</P></TD>
\t<TD class="tr3 td7"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr19 td3"><P class="p0 ft5">Notes</P></TD>
\t<TD class="tr19 td4"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr19 td5"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr19 td6"><P class="p3 ft3">&nbsp;</P></TD>
\t<TD class="tr19 td7"><P class="p3 ft3">&nbsp;</P></TD>
</TR>
</TABLE>
<P class="p13 ft6">Wire Transfer Information:</P>
<P class="p14 ft6">Bank of America</P>
<P class="p15 ft6">Account # 4830 6072 4354</P>
<P class="p14 ft6">Routing # 021000322</P>
<P class="p15 ft6">IBAN # 026009593 (wires)</P>
<P class="p15 ft6">SWIFT Code # BOFAUS3N</P>
<P class="p16 ft14">Phone: +1 <NOBR>917-456-8688</NOBR></P>
<P class="p17 ft15">Family Great Deals Inc</P>
<P class="p18 ft1">800 Ocean Parkway, 1E</P>
<P class="p18 ft16">Brooklyn, New York 11230</P>
<P class="p18 ft1">United States</P>
</DIV>
</BODY>
</HTML>
`
};