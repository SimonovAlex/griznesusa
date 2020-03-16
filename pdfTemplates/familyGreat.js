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

#page_1 #p1dimg1 {position:absolute;top:50px;left:22px;z-index:-1;width:553px;height:450px;}
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
<IMG src="data:image/jpg;base64,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KAOf/wCEN0v/AJ+tc/8AB7e//HqP+EN0v/n61z/we3v/AMeroKKAOf8A+EN0v/n61z/we3v/AMeo/wCEN0v/AJ+tc/8AB7e//Hq6CigDn/8AhDdL/wCfrXP/AAe3v/x6j/hDdL/5+tc/8Ht7/wDHq6CigDn/APhDdL/5+tc/8Ht7/wDHqP8AhDdL/wCfrXP/AAe3v/x6ugooA5//AIQ3S/8An61z/wAHt7/8eo/4Q3S/+frXP/B7e/8Ax6ugooA5/wD4Q3S/+frXP/B7e/8Ax6j/AIQ3S/8An61z/wAHt7/8eroKKAOf/wCEN0v/AJ+tc/8AB7e//HqP+EN0v/n61z/we3v/AMeroKKAOf8A+EN0v/n61z/we3v/AMeo/wCEN0v/AJ+tc/8AB7e//Hq6CigDn/8AhDdL/wCfrXP/AAe3v/x6j/hDdL/5+tc/8Ht7/wDHq6CigDn/APhDdL/5+tc/8Ht7/wDHqP8AhDdL/wCfrXP/AAe3v/x6ugooA5//AIQ3S/8An61z/wAHt7/8eo/4Q3S/+frXP/B7e/8Ax6ugooA5/wD4Q3S/+frXP/B7e/8Ax6j/AIQ3S/8An61z/wAHt7/8eroKKAOf/wCEN0v/AJ+tc/8AB7e//HqP+EN0v/n61z/we3v/AMeroKKAOf8A+EN0v/n61z/we3v/AMeo/wCEN0v/AJ+tc/8AB7e//Hq6CigDn/8AhDdL/wCfrXP/AAe3v/x6j/hDdL/5+tc/8Ht7/wDHq6CigDn/APhDdL/5+tc/8Ht7/wDHqK6CigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAork9M17xVqtq9xBoGjKiXE9uQ+sSg7opWiY8Wx43ISPbHTpVz7Z4w/wCgFof/AIOZv/kWgDoKK5/7Z4w/6AWh/wDg5m/+RaPtnjD/AKAW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UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKM0ZoAKKMio454Zt3lSo+w7W2tnB9DQBJRSFlAJJwB1J7VXs9Rs9QjZ7S5jmVW2sUOcGgCzRRkUZFABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmjNABRRmkyKAFoqMzxLMIjKglI3BCwyR649KkyKACiqq6jZvetZrcxG5UZMQb5gPpVnIoAWikyKMigBaKTIoyKAFopMijIoAWikyKMigBaKTIoyKAFopMijIoAWikyKMigBaKTIoyKAFopCQOtIzqilnYKqjJJ4AFADqKakiSIrowZGGQynIIqK6vLeyt2uLmZYol6ux4oAnoqOGeK4hSaGRZI3GVdTkEfWn5FAC0UmRRkUALRSZFGRQAtFJkUZFAC0UmRRkUALRSZFGRQAtFJkUZFAC0UmRRkUALRSZFGRQAtFJkUZFAC0UmRS0AFFFFABWfptrqNt5v27UVvN2NmIBFt656E5zx+VFFABptrqNt5v27UVvN2NmIBFt656E5zx+VGm2uo23m/btRW83Y2YgEW3rnoTnPH5UUUAGm2uo23m/btRW83Y2YgEW3rnoTnPH5Uaba6jbeb9u1FbzdjZiARbeuehOc8flRRQAaba6jbeb9u1FbzdjZiARbeuehOc8flRptrqNt5v27UVvN2NmIBFt656E5zx+VFFABptrqNt5v27UVvN2NmIBFt656E5zx+VGm2uo23m/btRW83Y2YgEW3rnoTnPH5UUUAGm2uo23m/btRW83Y2YgEW3rnoTnPH5Uaba6jbeb9u1FbzdjZiARbeuehOc8flRRQAaba6jbeb9u1FbzdjZiARbeuehOc8flRptrqNt5v27UVvN2NmIBFt656E5zx+VFFABptrqNt5v27UVvN2NmIBFt656E5zx+VGm2uo23m/btRW83Y2YgEW3rnoTnPH5UUUAGm2uo23m/btRW83Y2YgEW3rnoTnPH5Uaba6jbeb9u1FbzdjZiARbeuehOc8flRRQAaba6jbeb9u1FbzdjZiARbeuehOc8flRptrqNt5v27UVvN2NmIBFt656E5zx+VFFABptrqNt5v27UVvN2NmIBFt656E5zx+VGm2uo23m/btRW83Y2YgEW3rnoTnPH5UUUAH2S//ALK+z/2iv23/AJ+vs4x1z9zOOnHX3rC1eye70/7MEkvdYT7t7FbiPb82cb8gDj5cBs98UUUdQ6GedF8XQ6JcK+qCQupzAzF3KkcgOeh9gce9anh9Zrjw/JBb3oW+DKJbokTgk4PcnOF+XGePSiijuHY2fsl//ZX2f+0V+2/8/X2cY65+5nHTjr70fZL/APsr7P8A2iv23/n6+zjHXP3M46cdfeiigA0211G2837dqK3m7GzEAi29c9Cc54/KjTbXUbbzft2orebsbMQCLb1z0Jznj8qKKADTbXUbbzft2orebsbMQCLb1z0Jznj8qNNtdRtvN+3ait5uxsxAItvXPQnOePyoooANNtdRtvN+3ait5uxsxAItvXPQnOePyo0211G2837dqK3m7GzEAi29c9Cc54/KiigA0211G2837dqK3m7GzEAi29c9Cc54/KjTbXUbbzft2orebsbMQCLb1z0Jznj8qKKADTbXUbbzft2orebsbMQCLb1z0Jznj8qNNtdRtvN+3ait5uxsxAItvXPQnOePyoooANNtdRtvN+3ait5uxsxAItvXPQnOePyo0211G2837dqK3m7GzEAi29c9Cc54/KiigA0211G2837dqK3m7GzEAi29c9Cc54/KjTbXUbbzft2orebsbMQCLb1z0Jznj8qKKADTbXUbbzft2orebsbMQCLb1z0Jznj8qNNtdRtvN+3ait5uxsxAItvXPQnOePyoooANNtdRtvN+3ait5uxsxAItvXPQnOePyotrTUI7CaK41FZrlt2ycQBdnHHyg4ODzRRQBmyWzRQyQ61N/a/mY8qGOyGUPPPGQM+pIxjrWJpeg+LIHd49Sa2iUFY47h/MyB0+XLBfrkkUUUlsBY8Kpd22r3UGqzGW8Zm2L5u7yxnLHbngNkEHHQdq6XTrXUbfzPt2orebsbMQCPb69Cc54/KiimHUNOtNRt/M+3ait5uxsxAI9nr0POePyo0601G38z7dqK3m7GzEAj2evQ854/KiigA0601G38z7dqK3m7GzEAj2evQ854/KjTrTUbfzPt2orebsbMQCPZ69Dznj8qKKADTrTUbfzPt2orebsbMQCPZ69Dznj8qNOtNRt/M+3ait5uxsxAI9nr0POePyoooANOtNRt/M+3ait5uxsxAI9nr0POePyo0601G38z7dqK3m7GzEAj2evQ854/KiigA0601G38z7dqK3m7GzEAj2evQ854/KjTrTUbfzPt2orebsbMQCPZ69Dznj8qKKADTrTUbfzPt2orebsbMQCPZ69Dznj8qNOtNRt/M+3ait5uxsxAI9nr0POePyoooANOtNRt/M+3ait5uxsxAI9nr0POePyo0601G38z7dqK3m7GzEAj2evQ854/KiigA0601G38z7dqK3m7GzEAj2evQ854/KjTrTUbfzPt2orebsbMQCPZ69Dznj8qKKAIIrDWFtLiOTWVeZ9vlS/ZFHl4PPGfmyOPaptUtr+ZYzZaktmEDGTNuJN3p1IxjB/OiigDmtb0y41G7in8PW89rLkia5UfZ1kB7k5DHHJyAc5qnq+meJ7a2s/tGsI8SyLvkD+WYjgjJfgkY7k9TRRSewLc6fybm+0+zk0e++wQ7M7XgWUsDjHU9evOTnNW9RtNQufK+w6gLPbndmASbvTqRjHP50UUxINStNQufL+w6itntzvzAJN3p1PGOfzo1K01C58v7DqK2e3O/MAk3enU8Y5/OiigYalaahc+X9h1FbPbnfmASbvTqeMc/nRqVpqFz5f2HUVs9ud+YBJu9Op4xz+dFFABqVpqFz5f2HUVs9ud+YBJu9Op4xz+dGpWmoXPl/YdRWz2535gEm706njHP50UUAGpWmoXPl/YdRWz2535gEm706njHP50alaahc+X9h1FbPbnfmASbvTqeMc/nRRQAalaahc+X9h1FbPbnfmASbvTqeMc/nRqVpqFz5f2HUVs9ud+YBJu9Op4xz+dFFABqVpqFz5f2HUVs9ud+YBJu9Op4xz+dGpWmoXPl/YdRWz2535gEm706njHP50UUAGpWmoXPl/YdRWz2535gEm706njHP50alaahc+X9h1FbPbnfmASbvTqeMc/nRRQAalaahc+X9h1FbPbnfmASbvTqeMc/nRqVpqFz5f2HUVs9ud+YBJu9Op4xz+dFFABqVpqFz5f2HUVs9ud+YBJu9Op4xz+dGpWmoXPl/YdRWz2535gEm706njHP50UUAGo2uoXJi+w6iLPbnfmASb+mOpGMc/nWhRRQAUUUUAf/Z" id="p1img1"></DIV>


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