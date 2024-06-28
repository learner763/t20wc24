document.addEventListener("DOMContentLoaded", function() 
{
    let Team_Buttons=function()
    {
        let button_array=[]
        if(index==0)
        {
            button_array=[PAK,IND,USA,IRE,CAN]
        }
        else if (index==1){
            button_array=[AUS,ENG,SCO,NAM,OMA]
        }
        else if (index==2){
            button_array=[NZ,WI,AFG,UGA,PNG]
        }
        else{
            button_array=[SA,SL,BAN,NEP,NED]
        }
        for (let i = 0; i < button_array.length; i++) 
            {
                for (let j = 0; j < button_array[i].length; j++) 
                    {
                        button_array[i][j].style.display = "inline";        
                    }
            }
    }
    let Hide_Buttons=function()
    {
        for (let i = 0; i < button_array.length; i++) 
            {
                name_array[i].style.display="none"
            for (let j = 0; j < button_array[i].length; j++)
                {
                button_array[i][j].style.display = "none";        
                }
            }
    }
    let f=0;
    let Show_Table_Elements=function ()
    {
        if(f==0)
        {
            f=1
            for (let i = 0; i < PT.length; i++)
            {
                PT[i].style.display = "block"; 
            }
        }
    }
    let display_table=function()
    {
        let array1=[],array2=[],array3=[],array4=[],array5=[]
        /*for(let i=0;i<list.length;i++)
            {
                for(let j=0;j<list[i].length;j++)
                    {
                        for(let k=0;k<4;k++)
                            {
                                let l=i
                                if(l!=index)
                                    {
                                        list[l][j][k].style.display="none"
                                    }
                                else{
                                    if(format_array.includes(list[l][j][k]))
                                    {
                                        list[l][j][k].style.display="block"
                                    }
                                    }
                            }
                    }
            }*/
        /*if(index==2)
            {
                
                for(let i=0;i<Group1.length;i++)
                    {
                        for(let j=0;j<4;j++)
                            {
                                Group1[i][j].style.display="none"
                            }

                    }
                    for(let i=0;i<Group3.length;i++)
                        {
                            for(let j=0;j<4;j++)
                                {
                                    if(format_array.includes(Group2[i][j]))
                                        {
                                            Group3[i][j].style.display="none"

                                        }
                                }
    
                        }
                
            }
            if(index==0)
                {
                    
                    for(let i=0;i<Group3.length;i++)
                        {
                            for(let j=0;j<4;j++)
                                {
                                    Group3[i][j].style.display="none"
                                }
    
                        }
                        for(let i=0;i<Group1.length;i++)
                            {
                                for(let j=0;j<4;j++)
                                    {
                                        if(format_array.includes(Group1[i][j]))
                                            {
                                                Group1[i][j].style.display="none"
    
                                            }
                                    }
        
                            }
                    
                }

           */
        if(index==0)
            {
            array1=[L_IND,IND_W+IND_L,IND_W,IND_L,2*IND_W]
            array2=[L_PAK,PAK_W+PAK_L,PAK_W,PAK_L,2*PAK_W]
            array3=[L_USA,USA_W+USA_L,USA_W,USA_L,2*USA_W]
            array4=[L_IRE,IRE_W+IRE_L,IRE_W,IRE_L,2*IRE_W]
            array5=[L_CAN,CAN_W+CAN_L,CAN_W,CAN_L,2*CAN_W]
            }
        else if (index==1)
            {
            array1=[L_AUS,AUS_W+AUS_L,AUS_W,AUS_L,2*AUS_W]
            array2=[L_ENG,ENG_W+ENG_L,ENG_W,ENG_L,2*ENG_W]
            array3=[L_SCO,SCO_W+SCO_L,SCO_W,SCO_L,2*SCO_W]
            array4=[L_NAM,NAM_W+NAM_L,NAM_W,NAM_L,2*NAM_W]
            array5=[L_OMA,OMA_W+OMA_L,OMA_W,OMA_L,2*OMA_W]
            }
        else if(index==2)
            {
            array1=[L_NZ,NZ_W+NZ_L,NZ_W,NZ_L,2*NZ_W]
            array2=[L_WI,WI_W+WI_L,WI_W,WI_L,2*WI_W]
            array3=[L_AFG,AFG_W+AFG_L,AFG_W,AFG_L,2*AFG_W]
            array4=[L_UGA,UGA_W+UGA_L,UGA_W,UGA_L,2*UGA_W]
            array5=[L_PNG,PNG_W+PNG_L,PNG_W,PNG_L,2*PNG_W]
            }
        else{
            array1=[L_SA,SA_W+SA_L,SA_W,SA_L,2*SA_W]
            array2=[L_SL,SL_W+SL_L,SL_W,SA_L,2*SL_W]
            array3=[L_BAN,BAN_W+BAN_L,BAN_W,BAN_L,2*BAN_W]
            array4=[L_NEP,NEP_W+NEP_L,NEP_W,NEP_L,2*NEP_W]
            array5=[L_NED,NED_W+NED_L,NED_W,NED_L,2*NED_W]
            }
        let table_array=[array1,array2,array3,array4,array5]
        table_array.sort(function(a,b)
    {
        return b[4]-a[4]
    })
    let w1=0
    let move_up=20
    let move_side=16
    for(let i=0;i<table_array.length;i++)
        {
            for(let j=0;j<table_array.length;j++)
                {
                    if(w1%5==0)
                    {
                        move_up=move_up+10
                        move_side=16
                        label_array[w1]=table_array[i][j]
                        label_array[w1].style.display="block-inline"
                        label_array[w1].style.position="absolute"
                        label_array[w1].style.top=move_up+"%"
                        label_array[w1].style.left=move_side+"%"
                        move_side=move_side+5
                    }
                    else
                    {
                        move_side=move_side+8
                        label_array[w1].textContent=table_array[i][j]
                        label_array[w1].style.position="absolute"
                        label_array[w1].style.top=move_up+"%"
                        label_array[w1].style.left=move_side+"%"
                        label_array[w1].style.fontSize="larger"
                        label_array[w1].style.fontWeight="bold"
                    }
                    w1=w1+1
                }
        }
    }
    function calculate_points()
    {
        for(let i=0;i<button_array.length;i++)
        {
            for(let j=0;j<button_array[i].length;j++)
                {
                button_array[i][j].addEventListener("click",point.bind(null,i,j))
                }
        }
    function point(i,j)
        {
        if(i==0)//PAK
        {
            if(j==0){if(typeof M3=="undefined"){USA_L+=1,PAK_W+=1,M3="P",PAKISTAN[0].style.display="block",AMERICA[1].style.display="none",format_array.push(PAKISTAN[0])}else if(M3!="P"){USA_L+=1,USA_W-=1,PAK_W+=1,PAK_L-=1,M3="P",PAKISTAN[0].style.display="block",AMERICA[1].style.display="none",format_array.push(PAKISTAN[0]),format_array.pop(AMERICA[1])}}
            else if(j==1){if(typeof M5=="undefined"){IND_L+=1,PAK_W+=1,M5="P",PAKISTAN[1].style.display="block",INDIA[1].style.display="none",format_array.push(PAKISTAN[1])}else if(M5!="P"){IND_L+=1,IND_W-=1,PAK_W+=1,PAK_L-=1,M5="P",PAKISTAN[1].style.display="block",INDIA[1].style.display="none",format_array.push(PAKISTAN[1]),format_array.pop(INDIA[1])}}
            else if(j==2){if(typeof M6=="undefined"){CAN_L+=1,PAK_W+=1,M6="P",PAKISTAN[2].style.display="block",CANADA[2].style.display="none",format_array.push(PAKISTAN[2])}else if(M6!="P"){CAN_L+=1,CAN_W-=1,PAK_W+=1,PAK_L-=1,M6="P",PAKISTAN[2].style.display="block",CANADA[2].style.display="none",format_array.push(PAKISTAN[2]),format_array.pop(CANADA[2])}}
            else{if(typeof M10=="undefined"){IRE_L+=1,PAK_W+=1,M10="P",PAKISTAN[3].style.display="block",IRELAND[3].style.display="none",format_array.push(PAKISTAN[3])}else if(M10!="P"){IRE_L+=1,IRE_W-=1,PAK_W+=1,PAK_L-=1,M10="P",PAKISTAN[3].style.display="block",IRELAND[3].style.display="none",format_array.push(PAKISTAN[3]),format_array.pop(IRELAND[3])}}
        }
        else if(i==1)//ENG
        {
            if(j==0){if(typeof M12=="undefined"){SCO_L+=1,ENG_W+=1,M12="E",ENGLAND[0].style.display="block",SCOTLAND[0].style.display="none",format_array.push(ENGLAND[0])}else if(M12!="E"){SCO_L+=1,SCO_W-=1,ENG_W+=1,ENG_L-=1,M12="E",ENGLAND[0].style.display="block",SCOTLAND[0].style.display="none",format_array.push(ENGLAND[0]),format_array.pop(SCOTLAND[0])}}
            else if(j==1){if(typeof M15=="undefined"){AUS_L+=1,ENG_W+=1,M15="E",ENGLAND[1].style.display="block",AUSTRALIA[1].style.display="none",format_array.push(ENGLAND[0])}else if(M15!="E"){AUS_L+=1,AUS_W-=1,ENG_W+=1,ENG_L-=1,M15="E",ENGLAND[1].style.display="block",AUSTRALIA[1].style.display="none",format_array.push(ENGLAND[1]),format_array.pop(AUSTRALIA[1])}}
            else if(j==2){if(typeof M18=="undefined"){OMA_L+=1,ENG_W+=1,M18="E",ENGLAND[2].style.display="block",OMAN[3].style.display="none",format_array.push(ENGLAND[0])}else if(M18!="E"){OMA_L+=1,OMA_W-=1,ENG_W+=1,ENG_L-=1,M18="E",ENGLAND[2].style.display="block",OMAN[3].style.display="none",format_array.push(ENGLAND[2]),format_array.pop(OMAN[3])}}
            else {if(typeof M19=="undefined"){NAM_L+=1,ENG_W+=1,M19="E",ENGLAND[3].style.display="block",NAMIBIA[3].style.display="none",format_array.push(ENGLAND[0])}else if(M19!="E"){NAM_L+=1,NAM_W-=1,ENG_W+=1,ENG_L-=1,M19="E",ENGLAND[3].style.display="block",NAMIBIA[3].style.display="none",format_array.push(ENGLAND[3]),format_array.pop(NAMIBIA[3])}}
        }
        else if(i==2)//IND
        {
            if(j==0){if(typeof M2=="undefined"){IRE_L+=1,IND_W+=1,M2="I",INDIA[0].style.display="block",IRELAND[0].style.display="none",format_array.push(INDIA[0])}else if(M2!="I"){IRE_L+=1,IRE_W-=1,IND_W+=1,IND_L-=1,M2="I",INDIA[0].style.display="block",IRELAND[0].style.display="none",format_array.push(INDIA[0]),format_array.pop(IRELAND[0])}}
            else if(j==1){if(typeof M5=="undefined"){PAK_L+=1,IND_W+=1,M5="I",INDIA[1].style.display="block",PAKISTAN[1].style.display="none",format_array.push(INDIA[1])}else if(M5!="I"){PAK_L+=1,PAK_W-=1,IND_W+=1,IND_L-=1,M5="I",INDIA[1].style.display="block",PAKISTAN[1].style.display="none",format_array.push(INDIA[1]),format_array.pop(PAKISTAN[1])}}
            else if(j==2){if(typeof M7=="undefined"){USA_L+=1,IND_W+=1,M7="I",INDIA[2].style.display="block",AMERICA[2].style.display="none",format_array.push(INDIA[2])}else if(M7!="I"){USA_L+=1,USA_W-=1,IND_W+=1,IND_L-=1,M7="I",INDIA[2].style.display="block",AMERICA[2].style.display="none",format_array.push(INDIA[2]),format_array.pop(AMERICA[2])}}
            else {if(typeof M9=="undefined"){CAN_L+=1,IND_W+=1,M9="I",INDIA[3].style.display="block",CANADA[3].style.display="none",format_array.push(INDIA[3])}else if(M9!="I"){CAN_L+=1,CAN_W-=1,IND_W+=1,IND_L-=1,M9="I",INDIA[3].style.display="block",CANADA[3].style.display="none",format_array.push(INDIA[3]),format_array.pop(CANADA[3])}}
        }
        else if(i==3)//AUS
        {
            if(j==0){if(typeof M13=="undefined"){OMA_L+=1,AUS_W+=1,M13="A",AUSTRALIA[0].style.display="block",OMAN[1].style.display="none",format_array.push(AUSTRALIA[0])}else if(M13!="A"){OMA_L+=1,OMA_W-=1,AUS_W+=1,AUS_L-=1,M13="A",AUSTRALIA[0].style.display="block",OMAN[1].style.display="none",format_array.push(AUSTRALIA[0]),format_array.pop(OMAN[1])}}
            else if(j==1){if(typeof M15=="undefined"){ENG_L+=1,AUS_W+=1,M15="A",AUSTRALIA[1].style.display="block",ENGLAND[1].style.display="none",format_array.push(AUSTRALIA[1])}else if(M15!="A"){ENG_L+=1,ENG_W-=1,AUS_W+=1,AUS_L-=1,M15="A",AUSTRALIA[1].style.display="block",ENGLAND[1].style.display="none",format_array.push(AUSTRALIA[1]),format_array.pop(ENGLAND[1])}}
            else if(j==2){if(typeof M17=="undefined"){NAM_L+=1,AUS_W+=1,M17="A",AUSTRALIA[2].style.display="block",NAMIBIA[3].style.display="none",format_array.push(AUSTRALIA[2])}else if(M17!="A"){NAM_L+=1,NAM_W-=1,AUS_W+=1,AUS_L-=1,M17="A",AUSTRALIA[2].style.display="block",NAMIBIA[2].style.display="none",format_array.push(AUSTRALIA[2]),format_array.pop(NAMIBIA[2])}}
            else {if(typeof M20=="undefined"){SCO_L+=1,AUS_W+=1,M20="A",AUSTRALIA[3].style.display="block",SCOTLAND[3].style.display="none",format_array.push(AUSTRALIA[3])}else if(M20!="A"){SCO_L+=1,SCO_W-=1,AUS_W+=1,AUS_L-=1,M20="A",AUSTRALIA[3].style.display="block",SCOTLAND[3].style.display="none",format_array.push(AUSTRALIA[3]),format_array.pop(SCOTLAND[3])}}
        }
        else if(i==4)//AFG
        {
            if(j==0){if(typeof M22=="undefined"){UGA_L+=1,AFG_W+=1,M22="AFG",AFGHANISTAN[0].style.display="block",UGANDA[0].style.display="none",format_array.push(AFGHANISTAN[0])}else if(M22!="AFG"){UGA_L+=1,UGA_W-=1,AFG_W+=1,AFG_L-=1,M22="AFG",AFGHANISTAN[0].style.display="block",UGANDA[0].style.display="none",format_array.push(AFGHANISTAN[0]),format_array.pop(UGANDA[0])}}
            else if(j==1){if(typeof M24=="undefined"){NZ_L+=1,AFG_W+=1,M24="AFG",AFGHANISTAN[1].style.display="block",NEWZEALAND[0].style.display="none",format_array.push(AFGHANISTAN[0])}else if(M24!="AFG"){NZ_L+=1,NZ_W-=1,AFG_W+=1,AFG_L-=1,M24="AFG",AFGHANISTAN[1].style.display="block",NEWZEALAND[0].style.display="none",format_array.push(AFGHANISTAN[1]),format_array.pop(NEWZEALAND[0])}}
            else if(j==2){if(typeof M27=="undefined"){PNG_L+=1,AFG_W+=1,M27="AFG",AFGHANISTAN[2].style.display="block",PAPUA[2].style.display="none",format_array.push(AFGHANISTAN[0])}else if(M27!="AFG"){PNG_L+=1,PNG_W-=1,AFG_W+=1,AFG_L-=1,M27="AFG",AFGHANISTAN[2].style.display="block",PAPUA[2].style.display="none",format_array.push(AFGHANISTAN[2]),format_array.pop(PAPUA[2])}}
            else{if(typeof M30=="undefined"){WI_L+=1,AFG_W+=1,M30="AFG",AFGHANISTAN[3].style.display="block",WESTINDIES[3].style.display="none",format_array.push(AFGHANISTAN[0])}else if(M30!="AFG"){WI_L+=1,WI_W-=1,AFG_W+=1,AFG_L-=1,M30="AFG",AFGHANISTAN[3].style.display="block",WESTINDIES[3].style.display="none",format_array.push(AFGHANISTAN[3]),format_array.pop(WESTINDIES[3])}}
        }
        else if(i==5)//BAN
        {
            if(j==0){if(typeof M33=="undefined"){SL_L+=1,BAN_W+=1,M33="B",BANGLADESH[0].style.display="block",SRILANKA[1].style.display="none",format_array.push(BANGLADESH[0])}else if(M33!="B"){SL_L+=1,SL_W-=1,BAN_W+=1,BAN_L-=1,M33="B",BANGLADESH[0].style.display="block",SRILANKA[1].style.display="none",format_array.push(BANGLADESH[0]),format_array.pop(SRILANKA[1])}}
            else if(j==1){if(typeof M35=="undefined"){SA_L+=1,BAN_W+=1,M35="B",BANGLADESH[1].style.display="block",SOUTHAFRICA[2].style.display="none",format_array.push(BANGLADESH[1])}else if(M35!="B"){SA_L+=1,SA_W-=1,BAN_W+=1,BAN_L-=1,M35="B",BANGLADESH[1].style.display="block",SOUTHAFRICA[2].style.display="none",format_array.push(BANGLADESH[1]),format_array.pop(SOUTHAFRICA[2])}}
            else if(j==2){if(typeof M37=="undefined"){NED_L+=1,BAN_W+=1,M37="B",BANGLADESH[2].style.display="block",NETHERLAND[2].style.display="none",format_array.push(BANGLADESH[2])}else if(M37!="B"){NED_L+=1,NED_W-=1,BAN_W+=1,BAN_L-=1,M37="B",BANGLADESH[2].style.display="block",NETHERLAND[2].style.display="none",format_array.push(BANGLADESH[2]),format_array.pop(NETHERLAND[2])}}
            else {if(typeof M39=="undefined"){NEP_L+=1,BAN_W+=1,M39="B",BANGLADESH[3].style.display="block",NEPAL[3].style.display="none",format_array.push(BANGLADESH[3])}else if(M39!="B"){NEP_L+=1,NEP_W-=1,BAN_W+=1,BAN_L-=1,M39="B",BANGLADESH[3].style.display="block",NEPAL[3].style.display="none",format_array.push(BANGLADESH[3]),format_array.pop(NEPAL[3])}}
        }
        else if(i==6)//NED
        {
            if(j==0){if(typeof M32=="undefined"){NEP_L+=1,NED_W+=1,M32="NED",NETHERLAND[0].style.display="block",NEPAL[0].style.display="none",format_array.push(NETHERLAND[0])}else if(M32!="NED"){NEP_L+=1,NEP_W-=1,NED_W+=1,NED_L-=1,M32="NED",NETHERLAND[0].style.display="block",NEPAL[0].style.display="none",format_array.push(NETHERLAND[0]),format_array.pop(NEPAL[0])}}
            else if(j==1){if(typeof M34=="undefined"){SA_L+=1,NED_W+=1,M34="NED",NETHERLAND[1].style.display="block",SOUTHAFRICA[1].style.display="none",format_array.push(NETHERLAND[1])}else if(M34!="NED"){SA_L+=1,SA_W-=1,NED_W+=1,NED_L-=1,M34="NED",NETHERLAND[1].style.display="block",SOUTHAFRICA[1].style.display="none",format_array.push(NETHERLAND[1]),format_array.pop(SOUTHAFRICA[1])}}
            else if(j==2){if(typeof M37=="undefined"){BAN_L+=1,NED_W+=1,M37="NED",NETHERLAND[2].style.display="block",BANGLADESH[2].style.display="none",format_array.push(NETHERLAND[2])}else if(M37!="NED"){BAN_L+=1,BAN_W-=1,NED_W+=1,NED_L-=1,M37="NED",NETHERLAND[2].style.display="block",BANGLADESH[2].style.display="none",format_array.push(NETHERLAND[2]),format_array.pop(BANGLADESH[2])}}
            else {if(typeof M40=="undefined"){SL_L+=1,NED_W+=1,M40="NED",NETHERLAND[3].style.display="block",SRILANKA[3].style.display="none",format_array.push(NETHERLAND[3])}else if(M40!="NED"){SL_L+=1,SL_W-=1,NED_W+=1,NED_L-=1,M40="NED",NETHERLAND[3].style.display="block",SRILANKA[3].style.display="none",format_array.push(NETHERLAND[3]),format_array.pop(SRILANKA[3])}}
        }
        else if(i==7)//NEP
        {
            if(j==0){if(typeof M32=="undefined"){NED_L+=1,NEP_W+=1,M32="NEP",NEPAL[0].style.display="block",NETHERLAND[0].style.display="none",format_array.push(NEPAL[0])}else if(M32!="NEP"){NED_L+=1,NED_W-=1,NEP_W+=1,NEP_L-=1,M32="NEP",NEPAL[0].style.display="block",NETHERLAND[0].style.display="none",format_array.push(NEPAL[0]),format_array.pop(NETHERLAND[0])}}
            else if(j==1){if(typeof M36=="undefined"){SL_L+=1,NEP_W+=1,M36="NEP",NEPAL[1].style.display="block",SRILANKA[2].style.display="none",format_array.push(NEPAL[1])}else if(M36!="NEP"){SL_L+=1,SL_W-=1,NEP_W+=1,NEP_L-=1,M36="NEP",NEPAL[1].style.display="block",SRILANKA[2].style.display="none",format_array.push(NEPAL[1]),format_array.pop(SRILANKA[2])}}
            else if(j==2){if(typeof M38=="undefined"){SA_L+=1,NEP_W+=1,M38="NEP",NEPAL[2].style.display="block",SOUTHAFRICA[3].style.display="none",format_array.push(NEPAL[2])}else if(M38!="NEP"){SA_L+=1,SA_W-=1,NEP_W+=1,NEP_L-=1,M38="NEP",NEPAL[2].style.display="block",SOUTHAFRICA[3].style.display="none",format_array.push(NEPAL[2]),format_array.pop(SOUTHAFRICA[3])}}
            else {if(typeof M39=="undefined"){BAN_L+=1,NEP_W+=1,M39="NEP",NEPAL[3].style.display="block",BANGLADESH[3].style.display="none",format_array.push(NEPAL[3])}else if(M39!="NEP"){BAN_L+=1,BAN_W-=1,NEP_W+=1,NEP_L-=1,M39="NEP",NEPAL[3].style.display="block",BANGLADESH[3].style.display="none",format_array.push(NEPAL[3]),format_array.pop(BANGLADESH[3])}}
        }
        else if(i==8)//SCO
        {
            if(j==0){if(typeof M12=="undefined"){ENG_L+=1,SCO_W+=1,M12="S",SCOTLAND[0].style.display="block",ENGLAND[0].style.display="none",format_array.push(SCOTLAND[0])}else if(M12!="S"){ENG_L+=1,ENG_W-=1,SCO_W+=1,SCO_L-=1,M12="S",SCOTLAND[0].style.display="block",ENGLAND[0].style.display="none",format_array.push(SCOTLAND[0]),format_array.pop(ENGLAND[0])}}
            else if(j==1){if(typeof M14=="undefined"){NAM_L+=1,SCO_W+=1,M14="S",SCOTLAND[1].style.display="block",NAMIBIA[1].style.display="none",format_array.push(SCOTLAND[1])}else if(M14!="S"){NAM_L+=1,NAM_W-=1,SCO_W+=1,SCO_L-=1,M14="S",SCOTLAND[1].style.display="block",NAMIBIA[1].style.display="none",format_array.push(SCOTLAND[1]),format_array.pop(NAMIBIA[1])}}
            else if(j==2){if(typeof M16=="undefined"){OMA_L+=1,SCO_W+=1,M16="S",SCOTLAND[2].style.display="block",OMAN[2].style.display="none",format_array.push(SCOTLAND[2])}else if(M16!="S"){OMA_L+=1,OMA_W-=1,SCO_W+=1,SCO_L-=1,M16="S",SCOTLAND[2].style.display="block",OMAN[2].style.display="none",format_array.push(SCOTLAND[2]),format_array.pop(OMAN[2])}}
            else {if(typeof M20=="undefined"){AUS_L+=1,SCO_W+=1,M20="S",SCOTLAND[3].style.display="block",AUSTRALIA[3].style.display="none",format_array.push(SCOTLAND[3])}else if(M20!="S"){AUS_L+=1,AUS_W-=1,SCO_W+=1,SCO_L-=1,M20="S",SCOTLAND[3].style.display="block",AUSTRALIA[3].style.display="none",format_array.push(SCOTLAND[3]),format_array.pop(AUSTRALIA[3])}}
        }
        else if(i==9)//UGA
        {
            if(j==0){if(typeof M22=="undefined"){AFG_L+=1,UGA_W+=1,M22="UG",UGANDA[0].style.display="block",AFGHANISTAN[0].style.display="none",format_array.push(UGANDA[0])}else if(M22!="UG"){AFG_L+=1,AFG_W-=1,UGA_W+=1,UGA_L-=1,M22="UG",UGANDA[0].style.display="block",AFGHANISTAN[0].style.display="none",format_array.push(UGANDA[0]),format_array.pop(AFGHANISTAN[0])}}
            else if(j==1){if(typeof M23=="undefined"){PNG_L+=1,UGA_W+=1,M23="UG",UGANDA[1].style.display="block",PAPUA[1].style.display="none",format_array.push(UGANDA[1])}else if(M23!="UG"){UGANDA[1].style.display="block",PAPUA[1].style.display="none",PNG_L+=1,PNG_W-=1,UGA_W+=1,UGA_L-=1,M23="UG",format_array.push(UGANDA[1]),format_array.pop(PAPUA[1])}}
            else if(j==2){if(typeof M25=="undefined"){WI_L+=1,UGA_W+=1,M25="UG",UGANDA[2].style.display="block",WESTINDIES[1].style.display="none",format_array.push(UGANDA[2])}else if(M25!="UG"){UGANDA[2].style.display="block",WESTINDIES[1].style.display="none",WI_L+=1,WI_W-=1,UGA_W+=1,UGA_L-=1,M25="UG",format_array.push(UGANDA[2]),format_array.pop(WESTINDIES[1])}}
            else {if(typeof M28=="undefined"){NZ_L+=1,UGA_W+=1,M28="UG",UGANDA[3].style.display="block",NEWZEALAND[2].style.display="none",format_array.push(UGANDA[3])}else if(M28!="UG"){NZ_L+=1,NZ_W-=1,UGA_W+=1,UGA_L-=1,M28="UG",UGANDA[3].style.display="block",NEWZEALAND[2].style.display="none",format_array.push(UGANDA[3]),format_array.pop(NEWZEALAND[2])}}
        }
        else if(i==10)//USA
        {
            if(j==0){if(typeof M1=="undefined"){CAN_L+=1,USA_W+=1,M1="US",AMERICA[0].style.display="block",CANADA[0].style.display="none",format_array.push(AMERICA[0])}else if(M1!="US"){CAN_L+=1,CAN_W-=1,USA_W+=1,USA_L-=1,M1="US",AMERICA[0].style.display="block",CANADA[0].style.display="none",format_array.push(AMERICA[0]),format_array.pop(CANADA[0])}}
            else if(j==1){if(typeof M3=="undefined"){PAK_L+=1,USA_W+=1,M3="US",AMERICA[1].style.display="block",PAKISTAN[0].style.display="none",format_array.push(AMERICA[1])}else if(M3!="US"){PAK_L+=1,PAK_W-=1,USA_W+=1,USA_L-=1,M3="US",AMERICA[1].style.display="block",PAKISTAN[0].style.display="none",format_array.push(AMERICA[1]),format_array.pop(PAKISTAN[0])}}
            else if(j==2){if(typeof M7=="undefined"){IND_L+=1,USA_W+=1,M7="US",AMERICA[2].style.display="block",INDIA[2].style.display="none",format_array.push(AMERICA[2])}else if(M7!="US"){IND_L+=1,IND_W-=1,USA_W+=1,USA_L-=1,M7="US",AMERICA[2].style.display="block",INDIA[2].style.display="none",format_array.push(AMERICA[2]),format_array.pop(INDIA[2])}}
            else {if(typeof M8=="undefined"){IRE_L+=1,USA_W+=1,M8="US",AMERICA[3].style.display="block",IRELAND[2].style.display="none",format_array.push(AMERICA[3])}else if(M8!="US"){IRE_L+=1,IRE_W-=1,USA_W+=1,USA_L-=1,M8="US",AMERICA[3].style.display="block",IRELAND[2].style.display="none",format_array.push(AMERICA[3]),format_array.pop(IRELAND[2])}}
        }
        else if(i==11)//IRE
        {
            if(j==0){if(typeof M2=="undefined"){IND_L+=1,IRE_W+=1,M2="IR",IRELAND[0].style.display="block",INDIA[0].style.display="none",format_array.push(IRELAND[0])}else if(M2!="IR"){IRELAND[0].style.display="block",INDIA[0].style.display="none",IND_L+=1,IND_W-=1,IRE_W+=1,IRE_L-=1,format_array.push(IRELAND[0]),format_array.pop(INDIA[0])}}
            else if(j==1){if(typeof M4=="undefined"){CAN_L+=1,IRE_W+=1,M4="IR",IRELAND[1].style.display="block",CANADA[1].style.display="none",format_array.push(IRELAND[1])}else if(M4!="IR"){CAN_L+=1,CAN_W-=1,IRE_W+=1,IRE_L-=1,M4="IR",IRELAND[1].style.display="block",CANADA[1].style.display="none",format_array.push(IRELAND[1]),format_array.pop(CANADA[1])}}
            else if(j==2){if(typeof M8=="undefined"){USA_L+=1,IRE_W+=1,M8="IR",IRELAND[2].style.display="block",AMERICA[3].style.display="none",format_array.push(IRELAND[2])}else if(M8!="IR"){USA_L+=1,USA_W-=1,IRE_W+=1,IRE_L-=1,M8="IR",IRELAND[2].style.display="block",AMERICA[3].style.display="none",format_array.push(IRELAND[2]),format_array.pop(AMERICA[3])}}
            else{if(typeof M10=="undefined"){PAK_L+=1,IRE_W+=1,M10="IR",IRELAND[3].style.display="block",PAKISTAN[3].style.display="none",format_array.push(IRELAND[3])}else if(M10!="IR"){PAK_L+=1,PAK_W-=1,IRE_W+=1,IRE_L-=1,M10="IR",IRELAND[3].style.display="block",PAKISTAN[3].style.display="none",format_array.push(IRELAND[3]),format_array.pop(PAKISTAN[3])}}
        }
        else if(i==12)//SA
        {
            if(j==0){if(typeof M31=="undefined"){SL_L+=1,SA_W+=1,M31="SA",SOUTHAFRICA[0].style.display="block",SRILANKA[0].style.display="none",format_array.push(SOUTHAFRICA[0])}else if(M31!="SA"){SL_L+=1,SL_W-=1,SA_W+=1,SA_L-=1,M31="SA",SOUTHAFRICA[0].style.display="block",SRILANKA[0].style.display="none",format_array.push(SOUTHAFRICA[0]),format_array.pop(SRILANKA[0])}}
            else if(j==1){if(typeof M34=="undefined"){NED_L+=1,SA_W+=1,M34="SA",SOUTHAFRICA[1].style.display="block",NETHERLAND[1].style.display="none",format_array.push(SOUTHAFRICA[1])}else if(M34!="SA"){NED_L+=1,NED_W-=1,SA_W+=1,SA_L-=1,M34="SA",SOUTHAFRICA[1].style.display="block",NETHERLAND[1].style.display="none",format_array.push(SOUTHAFRICA[1]),format_array.pop(NETHERLAND[1])}}
            else if(j==2){if(typeof M35=="undefined"){BAN_L+=1,SA_W+=1,M35="SA",SOUTHAFRICA[2].style.display="block",BANGLADESH[1].style.display="none",format_array.push(SOUTHAFRICA[2])}else if(M31!="SA"){BAN_L+=1,BAN_W-=1,SA_W+=1,SA_L-=1,M35="SA",SOUTHAFRICA[2].style.display="block",BANGLADESH[1].style.display="none",format_array.push(SOUTHAFRICA[2]),format_array.pop(BANGLADESH[1])}}
            else {if(typeof M38=="undefined"){NEP_L+=1,SA_W+=1,M38="SA",SOUTHAFRICA[3].style.display="block",NEPAL[2].style.display="none",format_array.push(SOUTHAFRICA[3])}else if(M38!="SA"){NEP_L+=1,NEP_W-=1,SA_W+=1,SA_L-=1,M38="SA",SOUTHAFRICA[3].style.display="block",NEPAL[2].style.display="none",format_array.push(SOUTHAFRICA[3]),format_array.pop(NEPAL[2])}}
        }
        else if(i==13)//SL
        {
            if(j==0){if(typeof M31=="undefined"){SA_L+=1,SL_W+=1,M31="SL",SRILANKA[0].style.display="block",SOUTHAFRICA[0].style.display="none",format_array.push(SRILANKA[0])}else if(M31!="SL"){SA_L+=1,SA_W-=1,SL_W+=1,SL_L-=1,M31="SL",SRILANKA[0].style.display="block",SOUTHAFRICA[0].style.display="none",format_array.push(SRILANKA[0]),format_array.pop(SOUTHAFRICA[0])}}
            else if(j==1){if(typeof M33=="undefined"){BAN_L+=1,SL_W+=1,M33="SL",SRILANKA[1].style.display="block",BANGLADESH[0].style.display="none",format_array.push(SRILANKA[1])}else if(M33!="SL"){BAN_L+=1,BAN_W-=1,SL_W+=1,SL_L-=1,M33="SL",SRILANKA[1].style.display="block",BANGLADESH[0].style.display="none",format_array.push(SRILANKA[1]),format_array.pop(BANGLADESH[0])}}
            else if(j==2){if(typeof M36=="undefined"){NEP_L+=1,SL_W+=1,M36="SL",SRILANKA[2].style.display="block",NEPAL[1].style.display="none",format_array.push(SRILANKA[2])}else if(M36!="SL"){NEP_L+=1,NEP_W-=1,SL_W+=1,SL_L-=1,M36="SL",SRILANKA[2].style.display="block",NEPAL[1].style.display="none",format_array.push(SRILANKA[2]),format_array.pop(NEPAL[1])}}
            else{if(typeof M40=="undefined"){NED_L+=1,SL_W+=1,M40="SL",SRILANKA[3].style.display="block",NETHERLAND[3].style.display="none",format_array.push(SRILANKA[3])}else if(M40!="SL"){NED_L+=1,NED_W-=1,SL_W+=1,SL_L-=1,M40="SL",SRILANKA[3].style.display="block",NETHERLAND[3].style.display="none",format_array.push(SRILANKA[3]),format_array.pop(NETHERLAND[3])}}
        }
        else if(i==14)//NAM
        {
            if(j==0){if(typeof M11=="undefined"){OMA_L+=1,NAM_W+=1,M11="NAM",NAMIBIA[0].style.display="block",OMAN[0].style.display="none",format_array.push(NAMIBIA[0])}else if(M11!="NAM"){OMA_L+=1,OMA_W-=1,NAM_W+=1,NAM_L-=1,M11="NAM",NAMIBIA[0].style.display="block",OMAN[0].style.display="none",format_array.push(NAMIBIA[0]),format_array.pop(OMAN[0])}}
            else if(j==1){if(typeof M14=="undefined"){SCO_L+=1,NAM_W+=1,M14="NAM",NAMIBIA[1].style.display="block",SCOTLAND[1].style.display="none",format_array.push(NAMIBIA[1])}else if(M14!="NAM"){SCO_L+=1,SCO_W-=1,NAM_W+=1,NAM_L-=1,M14="NAM",NAMIBIA[1].style.display="block",SCOTLAND[1].style.display="none",format_array.push(NAMIBIA[1]),format_array.pop(SCOTLAND[1])}}
            else if(j==2){if(typeof M17=="undefined"){AUS_L+=1,NAM_W+=1,M17="NAM",NAMIBIA[2].style.display="block",AUSTRALIA[2].style.display="none",format_array.push(NAMIBIA[2])}else if(M17!="NAM"){AUS_L+=1,AUS_W-=1,NAM_W+=1,NAM_L-=1,M17="NAM",NAMIBIA[2].style.display="block",AUSTRALIA[2].style.display="none",format_array.push(NAMIBIA[2]),format_array.pop(AUSTRALIA[2])}}
            else {if(typeof M19=="undefined"){ENG_L+=1,NAM_W+=1,M19="NAM",NAMIBIA[3].style.display="block",ENGLAND[3].style.display="none",format_array.push(NAMIBIA[3])}else if(M19!="NAM"){ENG_L+=1,ENG_W-=1,NAM_W+=1,NAM_L-=1,M19="NAM",NAMIBIA[3].style.display="block",ENGLAND[3].style.display="none",format_array.push(NAMIBIA[3]),format_array.pop(ENGLAND[3])}}
        }
        else if(i==15)//NZ
        {
            if(j==0){if(typeof M24=="undefined"){AFG_L+=1,NZ_W+=1,M24="NZ",NEWZEALAND[0].style.display="block",AFGHANISTAN[1].style.display="none",format_array.push(NEWZEALAND[0])}else if(M24!="NZ"){AFG_L+=1,AFG_W-=1,NZ_W+=1,NZ_L-=1,M24="NZ",NEWZEALAND[0].style.display="block",AFGHANISTAN[1].style.display="none",format_array.push(NEWZEALAND[0]),format_array.pop(AFGHANISTAN[1])}}
            else if(j==1){if(typeof M26=="undefined"){WI_L+=1,NZ_W+=1,M26="NZ",NEWZEALAND[1].style.display="block",WESTINDIES[2].style.display="none",format_array.push(NEWZEALAND[1])}else if(M26!="NZ"){WI_L+=1,WI_W-=1,NZ_W+=1,NZ_L-=1,M26="NZ",NEWZEALAND[1].style.display="block",WESTINDIES[2].style.display="none",format_array.push(NEWZEALAND[1]),format_array.pop(WESTINDIES[2])}}
            else if(j==2){if(typeof M28=="undefined"){UGA_L+=1,NZ_W+=1,M28="NZ",NEWZEALAND[2].style.display="block",UGANDA[3].style.display="none",format_array.push(NEWZEALAND[2])}else if(M28!="NZ"){UGA_L+=1,UGA_W-=1,NZ_W+=1,NZ_L-=1,M28="NZ",NEWZEALAND[2].style.display="block",UGANDA[3].style.display="none",format_array.push(NEWZEALAND[2]),format_array.pop(UGANDA[3])}}
            else {if(typeof M29=="undefined"){PNG_L+=1,NZ_W+=1,M29="NZ",NEWZEALAND[3].style.display="block",PAPUA[3].style.display="none",format_array.push(NEWZEALAND[3])}else if(M29!="NZ"){PNG_L+=1,PNG_W-=1,NZ_W+=1,NZ_L-=1,M29="NZ",NEWZEALAND[3].style.display="block",PAPUA[3].style.display="none",format_array.push(NEWZEALAND[3]),format_array.pop(PAPUA[3])}}
        }
        else if(i==16)//WI
        {
            if(j==0){if(typeof M21=="undefined"){PNG_L+=1,WI_W+=1,M21="WI",WESTINDIES[0].style.display="block",PAPUA[0].style.display="none",format_array.push(WESTINDIES[0])}else if(M21!="WI"){PNG_L+=1,PNG_W-=1,WI_W+=1,WI_L-=1,M21="WI",WESTINDIES[0].style.display="block",PAPUA[0].style.display="none",format_array.push(WESTINDIES[0]),format_array.pop(PAPUA[0])}}
            else if(j==1){if(typeof M25=="undefined"){UGA_L+=1,WI_W+=1,M25="WI",WESTINDIES[1].style.display="block",UGANDA[2].style.display="none",format_array.push(WESTINDIES[1])}else if(M25!="WI"){UGA_L+=1,UGA_W-=1,WI_W+=1,WI_L-=1,M25="WI",WESTINDIES[1].style.display="block",UGANDA[2].style.display="none",format_array.push(WESTINDIES[1]),format_array.pop(UGANDA[2])}}
            else if(j==2){if(typeof M26=="undefined"){NZ_L+=1,WI_W+=1,M26="WI",WESTINDIES[2].style.display="block",NEWZEALAND[1].style.display="none",format_array.push(WESTINDIES[2])}else if(M26!="WI"){NZ_L+=1,NZ_W-=1,WI_W+=1,WI_L-=1,M26="WI",WESTINDIES[2].style.display="block",NEWZEALAND[1].style.display="none",format_array.push(WESTINDIES[2]),format_array.pop(NEWZEALAND[1])}}
            else {if(typeof M30=="undefined"){AFG_L+=1,WI_W+=1,M30="WI",WESTINDIES[3].style.display="block",AFGHANISTAN[3].style.display="none",format_array.push(WESTINDIES[3])}else if(M30!="WI"){AFG_L+=1,AFG_W-=1,WI_W+=1,WI_L-=1,M30="WI",WESTINDIES[3].style.display="block",AFGHANISTAN[3].style.display="none",format_array.push(WESTINDIES[3]),format_array.pop(AFGHANISTAN[3])}}
        }
        else if(i==17)//OMA
        {
            if(j==0){if(typeof M11=="undefined"){NAM_L+=1,OMA_W+=1,M11="OMA",OMAN[0].style.display="block",NAMIBIA[0].style.display="none",format_array.push(OMAN[0])}else if(M11!="OMA"){NAM_L+=1,NAM_W-=1,OMA_W+=1,OMA_L-=1,M11="OMA",OMAN[0].style.display="block",NAMIBIA[0].style.display="none",format_array.push(OMAN[0]),format_array.pop(NAMIBIA[0])}}
            else if(j==1){if(typeof M13=="undefined"){AUS_L+=1,OMA_W+=1,M13="OMA",OMAN[1].style.display="block",AUSTRALIA[1].style.display="none",format_array.push(OMAN[1])}else if(M13!="OMA"){AUS_L+=1,AUS_W-=1,OMA_W+=1,OMA_L-=1,M13="OMA",OMAN[1].style.display="block",AUSTRALIA[1].style.display="none",format_array.push(OMAN[1]),format_array.pop(AUSTRALIA[1])}}
            else if(j==2){if(typeof M16=="undefined"){SCO_L+=1,OMA_W+=1,M16="OMA",OMAN[2].style.display="block",SCOTLAND[2].style.display="none",format_array.push(OMAN[2])}else if(M16!="OMA"){SCO_L+=1,SCO_W-=1,OMA_W+=1,OMA_L-=1,M16="OMA",OMAN[2].style.display="block",SCOTLAND[2].style.display="none",format_array.push(OMAN[2]),format_array.pop(SCOTLAND[2])}}
            else {if(typeof M18=="undefined"){ENG_L+=1,OMA_W+=1,M18="OMA",OMAN[3].style.display="block",ENGLAND[2].style.display="none",format_array.push(OMAN[3])}else if(M18!="OMA"){ENG_L+=1,ENG_W-=1,OMA_W+=1,OMA_L-=1,M18="OMA",OMAN[3].style.display="block",ENGLAND[2].style.display="none",format_array.push(OMAN[3]),format_array.pop(ENGLAND[2])}}
        }
        else if(i==18)//PNG
        {
            if(j==0){if(typeof M21=="undefined"){WI_L+=1,PNG_W+=1,M21="PNG",PAPUA[0].style.display="block",WESTINDIES[0].style.display="none",format_array.push(PAPUA[0])}else if(M21!="PNG"){WI_L+=1,WI_W-=1,PNG_W+=1,PNG_L-=1,M21="PNG",PAPUA[0].style.display="block",WESTINDIES[0].style.display="none",format_array.push(PAPUA[0]),format_array.pop(WESTINDIES[0])}}
            else if(j==1){if(typeof M23=="undefined"){UGA_L+=1,PNG_W+=1,M23="PNG",PAPUA[1].style.display="block",UGANDA[1].style.display="none",format_array.push(PAPUA[1])}else if(M23!="PNG"){UGA_L+=1,UGA_W-=1,PNG_W+=1,PNG_L-=1,M23="PNG",PAPUA[1].style.display="block",UGANDA[1].style.display="none",format_array.push(PAPUA[1]),format_array.pop(UGANDA[1])}}
            else if(j==2){if(typeof M27=="undefined"){AFG_L+=1,PNG_W+=1,M27="PNG",PAPUA[2].style.display="block",AFGHANISTAN[2].style.display="none",format_array.push(PAPUA[2])}else if(M27!="PNG"){AFG_L+=1,AFG_W-=1,PNG_W+=1,PNG_L-=1,M27="PNG",PAPUA[2].style.display="block",AFGHANISTAN[2].style.display="none",format_array.push(PAPUA[2]),format_array.pop(AFGHANISTAN[2])}}
            else {if(typeof M29=="undefined"){NZ_L+=1,PNG_W+=1,M29="PNG",PAPUA[3].style.display="block",NEWZEALAND[3].style.display="none",format_array.push(PAPUA[3])}else if(M29!="PNG"){NZ_L+=1,NZ_W-=1,PNG_W+=1,PNG_L-=1,M29="PNG",PAPUA[3].style.display="block",NEWZEALAND[3].style.display="none",format_array.push(PAPUA[3]),format_array.pop(NEWZEALAND[3])}}
        }
        else if(i==19)//CAN
        {
            if(j==0){if(typeof M1=="undefined"){USA_L+=1,CAN_W+=1,M1="C",CANADA[0].style.display="block",AMERICA[0].style.display="none",format_array.push(CANADA[0])}else if(M1!="C"){USA_L+=1,USA_W-=1,CAN_W+=1,CAN_L-=1,M1="C",CANADA[0].style.display="block",AMERICA[0].style.display="none",format_array.push(CANADA[0]),format_array.pop(AMERICA[0])}}
            else if(j==1){if(typeof M4=="undefined"){IRE_L+=1,CAN_W+=1,M4="C",CANADA[1].style.display="block",IRELAND[1].style.display="none",format_array.push(CANADA[1])}else if(M4!="C"){IRE_L+=1,IRE_W-=1,CAN_W+=1,CAN_L-=1,M4="C",CANADA[1].style.display="block",IRELAND[1].style.display="none",format_array.push(CANADA[1]),format_array.pop(IRELAND[1])}}
            else if(j==2){if(typeof M6=="undefined"){PAK_L+=1,CAN_W+=1,M6="C",CANADA[2].style.display="block",PAKISTAN[2].style.display="none",format_array.push(CANADA[2])}else if(M6!="C"){PAK_L+=1,PAK_W-=1,CAN_W+=1,CAN_L-=1,M6="C",CANADA[2].style.display="block",PAKISTAN[2].style.display="none",format_array.push(CANADA[2]),format_array.pop(PAKISTAN[2])}}
            else {if(typeof M9=="undefined"){IND_L+=1,CAN_W+=1,M9="C",CANADA[3].style.display="block",INDIA[3].style.display="none",format_array.push(CANADA[3])}else if(M9!="C"){IND_L+=1,IND_W-=1,CAN_W+=1,CAN_L-=1,M9="C",CANADA[3].style.display="block",INDIA[3].style.display="none",format_array.push(CANADA[3]),format_array.pop(INDIA[3])}}
        }
        display_table()        
        }
    }
    let format_array=[]
    let array_again=[[40,50,55,75],[35,50,60,70],[40,50,60,75],[35,50,65,70],[30,45,50,65],[30,40,55,75],[45,55,65,70],[30,50,55,75],[35,45,60,75],[40,50,60,70],[30,40,60,65],[35,45,65,75],[30,45,55,70],[30,40,55,65],[35,45,55,75],[30,45,60,70],[30,40,60,70],[35,40,50,65],[35,55,65,70],[35,45,60,75]]
    function set_winning_labels()
    {

        for (let i=0;i<array.length;i++)
            {
                for(let j=0;j<4;j++)
                    {
                        array[i][j].style.position="absolute"
                        array[i][j].style.left=85+"%"
                        array[i][j].style.top=array_again[i][j]+"%"
                    }              
            }
    }
    

    let PAK = document.getElementsByClassName("PAK");
    let IND = document.getElementsByClassName("IND");
    let AUS = document.getElementsByClassName("AUS");
    let ENG = document.getElementsByClassName("ENG");
    let SA = document.getElementsByClassName("SA");
    let SL = document.getElementsByClassName("SL");
    let NZ = document.getElementsByClassName("NZ");
    let WI = document.getElementsByClassName("WI");
    let AFG = document.getElementsByClassName("AFG");
    let BAN = document.getElementsByClassName("BAN");
    let USA = document.getElementsByClassName("USA");
    let IRE = document.getElementsByClassName("IRE");
    let CAN = document.getElementsByClassName("CAN");
    let SCO = document.getElementsByClassName("SCO");
    let NAM = document.getElementsByClassName("NAM");
    let OMA = document.getElementsByClassName("OMA");
    let UGA = document.getElementsByClassName("UGA");
    let PNG = document.getElementsByClassName("PNG");
    let NEP = document.getElementsByClassName("NEP");
    let NED = document.getElementsByClassName("NED");
    let PT = document.getElementsByClassName("PT");
    let button_array=[PAK,ENG,IND,AUS,AFG,BAN,NED,NEP,SCO,UGA,USA,IRE,SA,SL,NAM,NZ,WI,OMA,PNG,CAN];
    PAK[0].style.backgroundColor="black"
    PAK[0].style.color="white"

    let PAKISTAN =document.getElementsByClassName("PAKISTAN")
    let INDIA =document.getElementsByClassName("INDIA")
    let AUSTRALIA =document.getElementsByClassName("AUSTRALIA")
    let ENGLAND =document.getElementsByClassName("ENGLAND")
    let SOUTHAFRICA =document.getElementsByClassName("SOUTHAFRICA")
    let SRILANKA =document.getElementsByClassName("SRILANKA")
    let NEWZEALAND =document.getElementsByClassName("NEWZEALAND")
    let WESTINDIES =document.getElementsByClassName("WESTINDIES")
    let AFGHANISTAN =document.getElementsByClassName("AFGHANISTAN")
    let BANGLADESH =document.getElementsByClassName("BANGLADESH")
    let IRELAND =document.getElementsByClassName("IRELAND")
    let CANADA =document.getElementsByClassName("CANADA")
    let AMERICA =document.getElementsByClassName("AMERICA")
    let SCOTLAND =document.getElementsByClassName("SCOTLAND")
    let OMAN =document.getElementsByClassName("OMAN")
    let NAMIBIA =document.getElementsByClassName("NAMIBIA")
    let PAPUA =document.getElementsByClassName("PAPUA")
    let UGANDA =document.getElementsByClassName("UGANDA")
    let NEPAL =document.getElementsByClassName("NEPAL")
    let NETHERLAND =document.getElementsByClassName("NETHERLAND")
    let array=[PAKISTAN,INDIA,AUSTRALIA,ENGLAND,SOUTHAFRICA,SRILANKA,NEWZEALAND,WESTINDIES,AFGHANISTAN,BANGLADESH,AMERICA,IRELAND,CANADA,OMAN,SCOTLAND,NAMIBIA,PAPUA,UGANDA,NEPAL,NETHERLAND]
    let L_PAK=document.getElementById("PAKISTAN")
    let L_IND=document.getElementById("INDIA")
    let L_AUS=document.getElementById("AUSTRALIA")
    let L_ENG=document.getElementById("ENGLAND")
    let L_SA=document.getElementById("SOUTHAFRICA")
    let L_NEP=document.getElementById("NEPAL")
    let L_SL=document.getElementById("SRILANKA")
    let L_NED=document.getElementById("NETHERLAND")
    let L_BAN=document.getElementById("BANGLADESH")
    let L_AFG=document.getElementById("AFGHANISTAN")
    let L_UGA=document.getElementById("UGANDA")
    let L_PNG=document.getElementById("_PNG")
    let L_USA=document.getElementById("_USA")
    let L_IRE=document.getElementById("IRELAND")
    let L_CAN=document.getElementById("CANADA")
    let L_WI=document.getElementById("WESTINDIES")
    let L_NZ=document.getElementById("NEWZEALAND")
    let L_NAM=document.getElementById("NAMIBIA")
    let L_OMA=document.getElementById("OMAN")
    let L_SCO=document.getElementById("SCOTLAND")
    let name_array=[L_AFG,L_AUS,L_BAN,L_CAN,L_PAK,L_IND,L_ENG,L_OMA,L_SCO,L_NED,L_NEP,L_IRE,L_NAM,L_NZ,L_WI,L_SA,L_SL,L_PNG,L_UGA,L_USA]
    let L1=document.getElementById("L1")
    let L2=document.getElementById("L2")
    let L3=document.getElementById("L3")
    let L4=document.getElementById("L4")
    let L5=document.getElementById("L5")
    let L6=document.getElementById("L6")
    let L7=document.getElementById("L7")
    let L8=document.getElementById("L8")
    let L9=document.getElementById("L9")
    let L10=document.getElementById("L10")
    let L11=document.getElementById("L11")
    let L12=document.getElementById("L12")
    let L13=document.getElementById("L13")
    let L14=document.getElementById("L14")
    let L15=document.getElementById("L15")
    let L16=document.getElementById("L16")
    let L17=document.getElementById("L17")
    let L18=document.getElementById("L18")
    let L19=document.getElementById("L19")
    let L20=document.getElementById("L20")
    let L21=document.getElementById("L21")
    let L22=document.getElementById("L22")
    let L23=document.getElementById("L23")
    let L24=document.getElementById("L24")
    let L25=document.getElementById("L25")
    let label_array=[L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20,L21,L22,L23,L24,L25]
    let PAK_W=0,PAK_L=0,ENG_W=0,ENG_L=0,IND_W=0,IND_L=0,AUS_W=0,AUS_L=0,AFG_W=0,AFG_L=0,BAN_W=0,BAN_L=0,NED_W=0,NED_L=0,NEP_W=0,NEP_L=0,SCO_W=0,SCO_L=0,UGA_W=0,UGA_L=0,USA_W=0,USA_L=0,IRE_W=0,IRE_L=0,SA_W=0,SA_L=0,SL_W=0,SL_L=0,NAM_W=0,NAM_L=0,NZ_W=0,NZ_L=0,WI_W=0,WI_L=0,OMA_W=0,OMA_L=0,PNG_W=0,PNG_L=0,CAN_W=0,CAN_L=0
    let G=document.getElementsByClassName("G");
    let index
    let a
    let Group=0
    let Group1=[PAKISTAN,INDIA,AMERICA,CANADA,IRELAND]
    let Group2=[AUSTRALIA,ENGLAND,SCOTLAND,NAMIBIA,OMAN]
    let Group3=[NEWZEALAND,WESTINDIES,AFGHANISTAN,PAPUA,UGANDA]
    let Group4=[SOUTHAFRICA,SRILANKA,BANGLADESH,NEPAL,NETHERLAND]
    let list=[Group1,Group2,Group3,Group4]

    for(let i=0;i<G.length;i++)
    {
        G[i].addEventListener("click",function()
        {
            index=i
            Hide_Buttons()
            Team_Buttons()
            Show_Table_Elements()
            display_table()
        })
    }
    let M1,M2,M3,M4,M5,M6,M7,M8,M9,M10,M11,M12,M13,M14,M15,M16,M17,M18,M19,M20,M21,M22,M23,M24,M25,M26,M27,M28,M29,M30,M31,M32,M33,M34,M35,M36,M37,M38,M39,M40
    set_winning_labels()
    calculate_points()
    set_table()
})
