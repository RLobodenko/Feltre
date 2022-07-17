
<?php
$link = mysqli_connect("localhost","root", "root", "img");

    $flag = mysqli_query($link, "SELECT * FROM `images`");
    
    
?>




<!doctype html>
<html lang="ru">
	<head>
		<meta charset="utf-8">
		<title>Калькулятор</title>

		<link rel="stylesheet/less" type="text/css" href="6.less" />
<script src="https://cdn.jsdelivr.net/npm/less@4" ></script>
    <script type="text/javascript" src="6.js" >
    </script>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap" rel="stylesheet">
<style>
			  
			</style>
				</head>
				
				<body>
                   
                
                             
                   
                       </div>  </div>
                   
				    <div class="one">Калькулятор читательских столов</div>
                   
                   
			 
                    
                   
                   
					
						
			<br>
			<br>
				
             
                <?php
                    
                    while($result = mysqli_fetch_assoc($flag))
                    
                    
                    
                    {
                        
                        ?>
                <?php echo $result['id']; ?>
              
                <img src="<?php echo $result['image']; ?>.jpg" alt="" width="230px" height="200px">

                <?php
                    }
                ?>

                
              
            
            <div class="three">
                           <p>Выберите номер позиции:</p>
                           
                           <select>
                               <option value="no">--</option>
                               <option value="1" name="in1">1</option>
                               <option value="2" name="in3">2</option>
                               <option value="3" name="in5">3</option>
                               <option value="4" name="in2">4</option>
                               <option value="5" name="in4">5</option>
                             
                           </select>
                           </div>
                           
                           <div class="three ">
                           
                           
                           <p>Выберите количество столов:</p>
                           
                           <select>
                               <option value="no">--</option>
                               <option value="1" name="in6">10</option>
                               <option value="2" name="in7">20</option>
                               <option value="3" name="in8">30</option>
                             
                           </select>
           </div>
           <br>
           <br>

           <div class="three ">
           <p>Выберите местоположение:</p>
           <select>
               <option value="no">--</option>
           <option value="1" name="in9">Беларусь</option>
           <option value="1,5" name="in10">Россия или Украина</option>
           <option value="2" name="in11">страны Евросоюза</option>
           
           </select>


           </div>



                   <br>

                   <br>

                   <div class="three ">

           <button id="but" onclick="f2()">Сформировать</button>
           <br>
                          <br>
           <span><strong> </strong><span id='test'></span></span><br>
          
           <span><strong>Цена:</strong> <span id='out'></span></span><br>
                               
                               <span><strong>Размеры:</strong> <span id='out1'></span></span><br>
                        
                        <span><strong>Доступные цвета:</strong> <span id='out2'></span></span><br>
                       </div>
                                





             
            
            <div class="three ">
         <p>Заказать через Telegram:</p>    </div>
            
            
              
                  
				</body>
</html>

