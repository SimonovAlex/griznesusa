module.exports = ({name, country, city, home, apartment, invoiceNumber, MemberBuyer, vinCode, invoiceDate, lotNumber, street, total, YMM}) => {
    return`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
<HEAD>
<META http-equiv="Content-Type" content="text/html; charset=UTF-8">
<TITLE>G&amp;G</TITLE>
<META name="generator" content="BCL easyConverter SDK 5.0.210">
<STYLE type="text/css">

body {margin-top: 0px;margin-left: 0px;}

#page_1 {position:relative; overflow: hidden;margin: 57px 0px 1px 4px;padding: 0px;border: none;width: 790px;}
#page_1 #id1_1 {border:none;margin: 200px 0px 0px 56px;padding: 0px;border:none;width: 734px;overflow: hidden;}
#page_1 #id1_2 {border:none;margin: 260px 0px 0px 0px;padding: 0px;border:none;width: 790px;overflow: hidden;}

#page_1 #p1dimg1 {position:absolute;top:0px;left:53px;z-index:-1;width:680px;height:531px;}
#page_1 #p1dimg1 #p1img1 {width:680px;height:531px;}




.dclr {clear:both;float:none;height:1px;margin:0px;padding:0px;overflow:hidden;}

.ft0{font: bold 12px 'Arial';line-height: 15px;}
.ft1{font: 12px 'Arial';line-height: 15px;}
.ft2{font: 1px 'Arial';line-height: 1px;}
.ft3{font: 12px 'Arial';line-height: 23px;}
.ft4{font: 1px 'Arial';line-height: 2px;}
.ft5{font: italic 12px 'Arial';line-height: 15px;}
.ft6{font: 1px 'Arial';line-height: 3px;}
.ft7{font: italic bold 12px 'Arial';line-height: 15px;}
.ft8{font: 1px 'Helvetica';line-height: 2px;}

.p0{text-align: left;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p1{text-align: left;padding-left: 4px;margin-top: 53px;margin-bottom: 0px;}
.p2{text-align: left;padding-left: 4px;padding-right: 649px;margin-top: 8px;margin-bottom: 0px;}
.p3{text-align: left;padding-left: 4px;margin-top: 2px;margin-bottom: 0px;}
.p4{text-align: left;padding-left: 164px;margin-top: 42px;margin-bottom: 0px;}
.p5{text-align: left;padding-left: 57px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p6{text-align: left;padding-left: 55px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p7{text-align: left;padding-left: 45px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p8{text-align: left;padding-left: 54px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p9{text-align: left;padding-left: 5px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p10{text-align: left;padding-left: 6px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p11{text-align: right;padding-right: 112px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p12{text-align: right;padding-right: 18px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p13{text-align: right;padding-right: 13px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p14{text-align: right;padding-right: 17px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p15{text-align: right;padding-right: 19px;margin-top: 0px;margin-bottom: 0px;white-space: nowrap;}
.p16{text-align: left;padding-left: 107px;margin-top: 55px;margin-bottom: 0px;}
.p17{text-align: left;padding-left: 220px;margin-top: 11px;margin-bottom: 0px;}
.p18{text-align: left;margin-top: 0px;margin-bottom: 0px;}

.td0{padding: 0px;margin: 0px;width: 447px;vertical-align: bottom;}
.td1{padding: 0px;margin: 0px;width: 188px;vertical-align: bottom;}
.td2{border-left: #000000 1px solid;border-right: #000000 1px solid;border-top: #000000 1px solid;border-bottom: #cccccc 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;background: #cccccc;}
.td3{border-right: #000000 1px solid;border-top: #000000 1px solid;border-bottom: #cccccc 1px solid;padding: 0px;margin: 0px;width: 168px;vertical-align: bottom;background: #cccccc;}
.td4{border-right: #000000 1px solid;border-top: #000000 1px solid;border-bottom: #cccccc 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;background: #cccccc;}
.td5{border-left: #000000 1px solid;border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;}
.td6{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 168px;vertical-align: bottom;}
.td7{border-right: #000000 1px solid;border-top: #000000 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;}
.td8{border-left: #000000 1px solid;border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;}
.td9{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 168px;vertical-align: bottom;}
.td10{border-right: #000000 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;}
.td11{border-left: #000000 1px solid;border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;}
.td12{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 168px;vertical-align: bottom;}
.td13{border-right: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 167px;vertical-align: bottom;}
.td14{border-left: #000000 1px solid;padding: 0px;margin: 0px;width: 168px;vertical-align: bottom;}
.td15{padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;}
.td16{border-left: #000000 1px solid;border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 168px;vertical-align: bottom;}
.td17{border-bottom: #000000 1px solid;padding: 0px;margin: 0px;width: 169px;vertical-align: bottom;}

.tr0{height: 26px;}
.tr1{height: 22px;}
.tr2{height: 23px;}
.tr3{height: 25px;}
.tr4{height: 19px;}
.tr5{height: 24px;}
.tr6{height: 2px;}
.tr7{height: 3px;}
.tr8{height: 21px;}

.t0{width: 635px;margin-left: 4px;font: 12px 'Arial';}
.t1{width: 673px;margin-top: 26px;font: 12px 'Arial';}

</STYLE>
</HEAD>

<BODY>
<DIV id="page_1">
<DIV id="p1dimg1">
<IMG src="data:image/jpg;base64,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igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKs8rpfWsathJN+4Y64HFVtXu57XyfJfbu3Z4B9PWiigDM/ta9/57/8Aji/4VZ0/ULqe+jjkl3Ic5G0DsfaiigC1q93Pa+T5L7d27PAPp61mf2te/wDPf/xxf8KKKALOn6hdT30ccku5DnI2gdj7Va1e7ntfJ8l9u7dngH09aKKAMz+1r3/nv/44v+FWdP1C6nvo45JdyHORtA7H2oooAtavdz2vk+S+3duzwD6etZn9rXv/AD3/APHF/wAKKKALOn6hdT30ccku5DnI2gdj7Va1e7ntfJ8l9u7dngH09aKKAMz+1r3/AJ7/APji/wCFWdP1C6nvo45JdyHORtA7H2oooAtavdz2vk+S+3duzwD6etZn9rXv/Pf/AMcX/CiigCzp+oXU99HHJLuQ5yNoHY+1WtXu57XyfJfbu3Z4B9PWiigDM/ta9/57/wDji/4VZ0/ULqe+jjkl3Ic5G0DsfaiigC1q93Pa+T5L7d27PAPp61mf2te/89//ABxf8KKKALOn6hdT30ccku5DnI2gdj7Va1e7ntfJ8l9u7dngH09aKKAMz+1r3/nv/wCOL/hVnT9Qup76OOSXchzkbQOx9qKKALWr3c9r5Pkvt3bs8A+nrWZ/a17/AM9//HF/woooAs6fqF1PfRxyS7kOcjaB2PtVrV7ue18nyX27t2eAfT1oooAzP7Wvf+e//ji/4VZ0/ULqe+jjkl3Ic5G0DsfaiigC1q93Pa+T5L7d27PAPp61mf2te/8APf8A8cX/AAoooAs6fqF1PfRxyS7kOcjaB2PtVrV7ue18nyX27t2eAfT1oooAzP7Wvf8Anv8A+OL/AIVZ0/ULqe+jjkl3Ic5G0DsfaiigC1q93Pa+T5L7d27PAPp61mf2te/89/8Axxf8KKKALOn6hdT30ccku5DnI2gdj7Va1e7ntfJ8l9u7dngH09aKKAMz+1r3/nv/AOOL/hVnT9Qup76OOSXchzkbQOx9qKKALWr3c9r5Pkvt3bs8A+nrWZ/a17/z3/8AHF/woooAs6fqF1PfRxyS7kOcjaB2PtVrV7ue18nyX27t2eAfT1oooAzP7Wvf+e//AI4v+FWdP1C6nvo45JdyHORtA7H2oooAtavdz2vk+S+3duzwD6etZn9rXv8Az3/8cX/CiigCzp+oXU99HHJLuQ5yNoHY+1WtXu57XyfJfbu3Z4B9PWiigDM/ta9/57/+OL/hVnT9Qup76OOSXchzkbQOx9qKKALWr3c9r5Pkvt3bs8A+nrWZ/a17/wA9/wDxxf8ACiigCzp+oXU99HHJLuQ5yNoHY+1WtXu57XyfJfbu3Z4B9PWiigDM/ta9/wCe/wD44v8AhVnT9Qup76OOSXchzkbQOx9qKKALWr3c9r5Pkvt3bs8A+nrWZ/a17/z3/wDHF/woooAs6fqF1PfRxyS7kOcjaB2PtVrV7ue18nyX27t2eAfT1oooAzP7Wvf+e/8A44v+FWdP1C6nvo45JdyHORtA7H2oooAtavdz2vk+S+3duzwD6etZn9rXv/Pf/wAcX/CiigCzp+oXU99HHJLuQ5yNoHY+1WtXu57XyfJfbu3Z4B9PWiigDM/ta9/57/8Aji/4VZ0/ULqe+jjkl3Ic5G0DsfaiigC1q93Pa+T5L7d27PAPp61mf2te/wDPf/xxf8KKKALOn6hdT30ccku5DnI2gdj7Va1e7ntfJ8l9u7dngH09aKKAMz+1r3/nv/44v+FWdP1C6nvo45JdyHORtA7H2oooAtavdz2vk+S+3duzwD6etZn9rXv/AD3/APHF/wAKKKALOn6hdT30ccku5DnI2gdj7UUUUAf/2Q==" id="p1img1"></DIV>


<DIV class="dclr"></DIV>
<DIV id="id1_1">
<TABLE cellpadding=0 cellspacing=0 class="t0">
<TR>
\t<TD class="tr0 td0"><P class="p0 ft0">SELLER</P></TD>
\t<TD class="tr0 td1"><P class="p0 ft1">Date: ${invoiceDate}</P></TD>
</TR>
<TR>
\t<TD class="tr1 td0"><P class="p0 ft1">G&G AUTO SALES LLC</P></TD>
\t<TD class="tr1 td1"><P class="p0 ft1">Invoice number: ${invoiceNumber}</P></TD>
</TR>
<TR>
\t<TD class="tr2 td0"><P class="p0 ft1">8 Aviation Ct Savannah</P></TD>
\t<TD class="tr2 td1"><P class="p0 ft2">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr2 td0"><P class="p0 ft1">GA 31408 U S A</P></TD>
\t<TD class="tr2 td1"><P class="p0 ft2">&nbsp;</P></TD>
</TR>
</TABLE>
<P class="p1 ft0">BILL TO</P>
<P class="p2 ft3">Member: ${MemberBuyer} ${name} ${country}, ${city},</P>
<P class="p3 ft1">${street} str. bld ${home}, ap. ${apartment}</P>
<P class="p4 ft1">Please detach top portion and return with your payment.</P>
<TABLE cellpadding=0 cellspacing=0 class="t1">
<TR>
\t<TD class="tr3 td2"><P class="p5 ft0">Service</P></TD>
\t<TD class="tr3 td3"><P class="p6 ft0">Activity</P></TD>
\t<TD class="tr3 td4"><P class="p7 ft0">Price Each</P></TD>
\t<TD class="tr3 td4"><P class="p8 ft0">Amount</P></TD>
</TR>
<TR>
\t<TD class="tr4 td5"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr4 td6"><P class="p9 ft1">${YMM}</P></TD>
\t<TD class="tr4 td7"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr4 td7"><P class="p0 ft2">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr5 td8"><P class="p10 ft1">Payment for good</P></TD>
\t<TD class="tr5 td9"><P class="p9 ft1">${vinCode}</P></TD>
\t<TD class="tr5 td10"><P class="p11 ft1">$${total}</P></TD>
\t<TD class="tr5 td10"><P class="p11 ft1">$${total}</P></TD>
</TR>
<TR>
\t<TD class="tr2 td8"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr2 td9"><P class="p9 ft1">${lotNumber}</P></TD>
\t<TD class="tr2 td10"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr2 td10"><P class="p0 ft2">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr6 td11"><P class="p0 ft4">&nbsp;</P></TD>
\t<TD class="tr6 td12"><P class="p0 ft4">&nbsp;</P></TD>
\t<TD class="tr6 td13"><P class="p0 ft4">&nbsp;</P></TD>
\t<TD class="tr6 td13"><P class="p0 ft4">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr2 td14"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr2 td15"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr2 td10"><P class="p12 ft5">Total:</P></TD>
\t<TD class="tr1 td13"><P class="p13 ft1">$${total}</P></TD>
</TR>
<TR>
\t<TD class="tr4 td14"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr4 td15"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr4 td10"><P class="p14 ft5">Payment:</P></TD>
\t<TD class="tr4 td10"><P class="p13 ft1"><NOBR>-$0,00</NOBR></P></TD>
</TR>
<TR>
\t<TD class="tr7 td14"><P class="p0 ft6">&nbsp;</P></TD>
\t<TD class="tr7 td15"><P class="p0 ft6">&nbsp;</P></TD>
\t<TD class="tr7 td10"><P class="p0 ft6">&nbsp;</P></TD>
\t<TD class="tr6 td13"><P class="p0 ft4">&nbsp;</P></TD>
</TR>
<TR>
\t<TD class="tr8 td14"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr8 td15"><P class="p0 ft2">&nbsp;</P></TD>
\t<TD class="tr8 td10"><P class="p15 ft7">Balance Due</P></TD>
\t<TD class="tr8 td10"><P class="p13 ft1">$${total}</P></TD>
</TR>
<TR>
\t<TD class="tr7 td16"><P class="p0 ft6">&nbsp;</P></TD>
\t<TD class="tr7 td17"><P class="p0 ft6">&nbsp;</P></TD>
\t<TD class="tr7 td13"><P class="p0 ft6">&nbsp;</P></TD>
\t<TD class="tr7 td13"><P class="p0 ft6">&nbsp;</P></TD>
</TR>
</TABLE>
<P class="p16 ft0">**NO ACCOUNT CASH DEPOSITS ACCEPTED AS PAYMENT METHOD**</P>
<P class="p17 ft0">THANK YOU FOR YOUR BUSINESS!</P>
</DIV>
</DIV>
</BODY>
</HTML>`
};