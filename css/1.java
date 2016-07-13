class Untitled {
	public static void main(String[] args) {
		
		int start=10000000000;
		while(DEKHash(start++) == 378958353664804585) {
			System.out.println(start);
		}
		
		//String ss="13524286564";		
		//DEKHash(ss);

	}

	public static long DEKHash(String str) {
		long hash = str.length();
		for(int i = 0; i < str.length(); i++) {
			hash = ((hash << 5) ^ (hash >> 27)) ^ str.charAt(i);
			System.out.println(hash);
		}
		return hash;
	}
}