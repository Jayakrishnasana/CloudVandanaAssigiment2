public class PanagramCheck {
	public static void main(String[] args) {
		String s="The Quick Brown Fox Jumps Over The lazy Dog";
        if(isPanagram(s.toLowerCase()))
            System.out.println("Given Sentence is a Panagram");
        
        else  System.out.println("Given Sentence is Not a Panagram");
		
		
	}

	private static boolean isPanagram(String s) {
		if(s.length()<26) {
			return false;
		}
		else {
			for(char ch='a';ch<='z';ch++) {
				if(s.indexOf(ch)<0) {
					return false;
				}
			}
			return true;
		}
		
		
	}

}