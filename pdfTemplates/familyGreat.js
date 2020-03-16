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
<IMG src="data:image/jpeg;base64,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Nv8A5a0f8O0Ph3/0Mnx//wDD6eNv/lrX0DmjNAHz9/w7Q+Hf/QyfH/8A8Pp42/8AlrR/w7Q+Hf8A0Mnx/wD/AA+njb/5a19A5ozQB8/f8O0Ph3/0Mnx//wDD6eNv/lrR/wAO0Ph3/wBDJ8f/APw+njb/AOWtfQOaM0AfP3/DtD4d/wDQyfH/AP8AD6eNv/lrR/w7Q+Hf/QyfH/8A8Pp42/8AlrX0DmjNAHz9/wAO0Ph3/wBDJ8f/APw+njb/AOWtH/DtD4d/9DJ8f/8Aw+njb/5a19A5ozQB8/f8O0Ph3/0Mnx//APD6eNv/AJa0f8O0Ph3/ANDJ8f8A/wAPp42/+WtfQOaM0AfP3/DtD4d/9DJ8f/8Aw+njb/5a0f8ADtD4d/8AQyfH/wD8Pp42/wDlrX0DmjNAHz9/w7Q+Hf8A0Mnx/wD/AA+njb/5a0f8O0Ph3/0Mnx//APD6eNv/AJa19A5ozQBy/wAIfhRofwH+GHhvwZ4bsxpvhvwlpltomj2rXMtw1taW8axQxeZMzSNtRFGXdiQOSTXUVHKzPH8oZe59vbj+makoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiivPvBH7Tvgn4k/FHWPBuh69bah4i8PtONQskSRXtvJlWGXJZQpKyMq4BOc57UAeg0V574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIkiva+TKsMuSyhSVkZVwCc5z2o8DftO+CfiV8T9Y8G6Hr1tqHiTQDMNQskSRXtfJlWGXJZQpKyMq4BOc57UAehUV574G/ad8E/Er4n6x4N0PXrbUPEmgGYahZIk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" id="p1img1"></DIV>


<P class="p0 ft0">Family Great Deals Inc</P>
<P class="p1 ft1">800 Ocean Parkway, 1E Brooklyn, New York 11230 United States +19174568688</P>
<P class="p2 ft4">SELLER:<SPAN style="padding-left:325px;"><SPAN class="ft2">INVOICE</SPAN><SPAN class="ft3">​</SPAN></SPAN></P>
<P class="p3 ft5">Family Great Deals Inc</P>
<TABLE cellpadding=0 cellspacing=0 class="t0">
<TR>
\t<TD class="tr0 td0"><P class="p4 ft6">Invoice number:</P></TD>
\t<TD class="tr0 td1"><P class="p4 ft7">${invoiceNumber}</P></TD>
</TR>
<TR>
\t<TD class="tr1 td0"><P class="p4 ft8">Invoice date:</P></TD>
\t<TD class="tr1 td1"><P class="p5 ft6">${invoiceDate}</P></TD>
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
<P class="p21 ft22">**NO ACCOUNT CASH DEPOSITS ACCEPTED AS PAYMENT METHOD**</P>
<P class="p22 ft22">THANK YOU FOR YOUR BUSINESS!</P>
</DIV>
</BODY>
</HTML> `
};