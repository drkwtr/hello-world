import java.security.MessageDigest;
import java.util.Scanner; 
public class AssignmentMD5
{
    public static void main(String[] args)throws Exception
    {
    
System.out.println("Please enter the characters to be converted to md5");
Scanner scan = new Scanner(System.in);
String input = scan.next();
    	
    	
        MessageDigest dig = MessageDigest.getInstance("MD5");
        dig.update(input.getBytes());
 
        byte byted[] = dig.digest();
 
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < byted.length; i++) {
         buffer.append(Integer.toString((byted[i] & 0xff) + 0x100, 16).substring(1));
        }
        StringBuffer hS = new StringBuffer();
    	for (int i=0;i<byted.length;i++) {
    		String hex=Integer.toHexString(0xff & byted[i]);
   	     	if(hex.length()==1) hS.append('0');
   	     	hS.append(hex);
    	}
    	
    	System.out.println("in md5 is)):: " + hS.toString());
					}					
}