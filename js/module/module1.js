var monFonct = {

tabloImg : [

    {
            'nom': 'stelvio-quadrifoglio-giulia-quadrifoglio-alfa-romeo-racing.jpg',
            'width': 1377,
            'height': 600,       
    
        },
        {
            'nom': 'abarth-595-esseesse-1-e1551192568261.jpg',
            'width': 1377,
            'height': 600,       
    
        },
        {
            'nom': 'audi-r8-v10-decennium.jpg',
            'width': 1377,
            'height': 600,       
    
        },
        {
            'nom': 'lamborghini-huracan-evo-spyder-e1551629256961.jpg',
            'width': 1377,
            'height': 600,       
    
        },
        {
            'nom': 'stelvio-quadrifoglio-giulia-quadrifoglio-alfa-romeo-racing.jpg',
            'width': 1377,
            'height': 600,       
    
        },
     
     {
            'nom': 'abarth-595-esseesse-1-e1551192568261.jpg',
            'width': 1377,
            'height': 600,       
    
        },
    ],
    
    
    
    
    
    creerSlider : function (){
    
            var hauteur = this.tabloImg[0].height; 
            var largeur = this.tabloImg[0].width ;

            
            var monBloc = document.createElement('div');
            monBloc.classList.add('monBloc');
            monBloc.style.height = hauteur+'px';
            monBloc.style.width = largeur+'px';
            monBloc.style.overflow = 'hidden';
            //monBloc.style.border = '1px dotted #555';
    
            var monBlocInt = document.createElement('div');
            monBlocInt.style.position = 'relative';
            monBlocInt.style.display = 'flex';
            monBlocInt.style.zIndex = '-2';
            monBloc.appendChild(monBlocInt);
            
    
    
            this.tabloImg.forEach(element => {
    
                let monImg = document.createElement('img');
                monImg.src = 'img/'+element.nom+'';
                monImg.height = element.height;
                monImg.width = element.width;
                monBlocInt.appendChild(monImg);
                
            });
    
            var lesBoutton = document.createElement('div');
            let buttonG = document.createElement('button');
            let buttonD = document.createElement('button');
    
            buttonD.innerHTML = "<";
            buttonD.style.fontSize = '150px';
            buttonG.innerHTML = ">";
            buttonG.style.fontSize = '150px';
            buttonD.style.background = 'none';
            buttonG.style.background = 'none';
            buttonD.style.border = 'none';
            buttonG.style.border = 'none';
            buttonG.style.color = "#fff";
            buttonD.style.color = "#fff";
            
    
            lesBoutton.appendChild(buttonD);
            lesBoutton.appendChild(buttonG);
    
            document.getElementById("main").appendChild(lesBoutton);
            document.getElementById("main").appendChild(monBloc);
    
    
            lesBoutton.style.display= 'flex';
            lesBoutton.style.width = '100%';
            lesBoutton.style.justifyContent = 'space-between';
            lesBoutton.style.position = 'absolute';
            lesBoutton.style.top = hauteur/3+'px';
            lesBoutton.style.color = "#fff";
    
            let i = 1;
            let L ;
            monBlocInt.style.left = -largeur*i+'px';
    
            buttonG.addEventListener('click', function(){  
                
            
                
                i++;
                if(i>=monFonct.tabloImg.length-1){ i=1}
                L = largeur;           
                L *= i;
                if(i==0){  monBlocInt.style.left = largeur*(i*(monFonct.tabloImg.length-2))+'px';} 
                else if(i<0){ 
                    j = i+tabloImg.length-2;
                    monBlocInt.style.left = -largeur*j+'px';
                }else{ 
                    monBlocInt.style.left = -L+'px';
                }
                     
            });
    
            let j; 
            
            buttonD.addEventListener('click', function(){  
                 i--;  
                 L = largeur;           
                L *= i;
                 if(i <= -monFonct.tabloImg.length+2){ i=1}
    
                 if(i==0){  monBlocInt.style.left = largeur*(i*(monFonct.tabloImg.length-1))+'px';}
                
                if(i<1){ 
                    j = i+monFonct.tabloImg.length-2;
                    monBlocInt.style.left = -largeur*j+'px';   
                }else{ 
                    monBlocInt.style.left = -largeur*i+'px';
                }                        
    
            })
            // function deplac(){
    
            // }
    
    },
}
    
export {monFonct};