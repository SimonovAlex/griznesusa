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
#page_1 #p1dimg1 #p1img1 {width:553px;height:600px;}




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
<IMG src="data:image/jpeg;base64,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8t6+g6KAPnz/AIdrfDz/AKGL4/f+H18b/wDy3or6DooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKK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igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACgnFFef/HWX4mRjS/8AhXcPgiX/AF32/wD4SGe6iwcJ5XleQjA/8tN28gfdxnnAB3+4UbhXnXxrl+JkS6Yvw7t/BcmBL9u/4SO5uo8fd8nyvIVt3/LTd5mP4MZ5wfGuX4mRLpi/Du38FyYEv27/AISO5uo8fd8nyvIVt3/LTd5mP4MZ5wAei7hRuFedfGuX4mRLpi/Du38FyYEv27/hI7m6jx93yfK8hW3f8tN3mY/gxnnB8a5fiZEumL8O7fwXJgS/bv8AhI7m6jx93yfK8hW3f8tN3mY/gxnnAB6LuFG4V518a5fiZEumL8O7fwXJgS/bv+EjubqPH3fJ8ryFbd/y03eZj+DGecHxrl+JkS6Yvw7t/BcmBL9u/wCEjubqPH3fJ8ryFbd/y03eZj+DGecAHou4UbhXnXxrl+JkS6Yvw7t/BcmBL9u/4SO5uo8fd8nyvIVt3/LTd5mP4MZ5wfGuX4mRLpi/Du38FyYEv27/AISO5uo8fd8nyvIVt3/LTd5mP4MZ5wAei7hRuFedfGuX4mRLpi/Du38F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" id="p1img1"></DIV>


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