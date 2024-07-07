document.addEventListener("DOMContentLoaded", function() 
{
    let Team_Buttons=function()
    {
        extracted_button_array=button_array.slice(5*index,5*index+5)
        for (let i = 0; i < extracted_button_array.length; i++) 
            {
                for (let j = 0; j < extracted_button_array[i].length; j++) 
                    {
                        extracted_button_array[i][j].style.display = "inline";        
                    }
            }
        for (let j = 0; j < G.length; j++) 
            {
                if(j==index)
                    {
                        G[j].style.backgroundColor="black"
                        G[j].style.color="white"
                    }
                else{
                    G[j].style.backgroundColor="darkkhaki"
                    G[j].style.color="black"
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
        extracted_array=array.slice(5*index,5*index+5)
        let extracted_array_2=[[],[],[],[],[]]

        for(let i=0;i<extracted_array.length;i++)
        {
            extracted_array_2[i][0]=extracted_array[i][0]
            extracted_array_2[i][1]=count(extracted_array[i],0)+count(extracted_array[i],2)
            extracted_array_2[i][2]=count(extracted_array[i],2)
            extracted_array_2[i][3]=count(extracted_array[i],0)
            extracted_array_2[i][4]=2*count(extracted_array[i],2)
            
        }
        extracted_array_2.sort(function(a,b)
        {
            return b[4]-a[4]
        })
        let w1=0
        let move_up=20
        let move_side=16
        for(let i=0;i<extracted_array_2.length;i++)
        {
            for(let j=0;j<extracted_array_2[i].length;j++)
                {
                    if(w1%5==0)
                    {
                        move_up=move_up+10
                        move_side=16
                        label_array[w1]=extracted_array_2[i][j]
                        label_array[w1].style.display="inline-block"
                        move_side=move_side+5
                    }
                    else
                    {
                        move_side=move_side+9
                        label_array[w1].textContent=extracted_array_2[i][j]
                        label_array[w1].style.color="white"

                    }
                        label_array[w1].style.position="absolute"
                        label_array[w1].style.top=move_up+"%"
                        label_array[w1].style.left=move_side+"%"
                        label_array[w1].style.fontSize="larger"
                        label_array[w1].style.fontWeight="bold"
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
                        button_array[i][j].addEventListener("click",function()
                    {
                        let y=parseFloat(String(i)+String(j))
                        if(check_array.includes(y)==false)
                        {
                            button_array[i][j].style.backgroundColor="black"
                            button_array[i][j].style.color="white"
                            array[i][j+1]=2,array[points_table[i][j]][points_table[points_table[i][j]].indexOf(i)+1]=0
                            display_table()
                            button_array[points_table[i][j]][points_table[points_table[i][j]].indexOf(i)].style.backgroundColor=buttoncolors[points_table[i][j]]
                            button_array[points_table[i][j]][points_table[points_table[i][j]].indexOf(i)].style.color="black"
                            check_array.push(y)
                            check_array.pop(parseFloat(String(points_table[i][j])+String(points_table[points_table[i][j]])))
                        }
                    })
                    }
            }
    }
    
    
    function count(x,a)
    {
        return x.filter(e=>e==a).length
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
    let Super8 = document.getElementById("super8");
    let button_array=[IND,PAK,USA,IRE,CAN,AUS,ENG,SCO,NAM,OMA,NZ,WI,AFG,PNG,UGA,SA,SL,BAN,NEP,NED];
    let extracted_button_array=[]
    
    let points_table=[[3,1,2,4],[2,0,4,3],[4,1,0,3],[0,4,2,1],[2,3,1,0],[9,6,8,7],[7,5,9,8],[6,8,9,5],[9,7,5,6],[8,5,7,6],[12,11,14,13],[13,14,10,12],[14,10,13,11],[11,14,10,12],[12,13,11,10],[16,19,17,18],[15,17,18,19],[16,15,19,18],[19,16,15,17],[18,15,17,16]]        
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
    buttoncolors=[]
    for(let i=0;i<button_array.length;i++)
    {
        buttoncolors[i]=window.getComputedStyle(button_array[i][0]).backgroundColor
    }

    let G=document.getElementsByClassName("G");
    let index
    let array=[[L_IND],[L_PAK],[L_USA],[L_IRE],[L_CAN],[L_AUS],[L_ENG],[L_SCO],[L_NAM],[L_OMA],[L_NZ],[L_WI],[L_AFG],[L_PNG],[L_UGA],[L_SA],[L_SL],[L_BAN],[L_NEP],[L_NED]]
    for(let u=0;u<20;u++)
    {
        for(let r=0;r<4;r++)
        {
            array[u].push(1)
        }
    }
    let extracted_array=[]
    let check_array=[]

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
    calculate_points()

})
