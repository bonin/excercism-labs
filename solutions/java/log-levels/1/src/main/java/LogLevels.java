public class LogLevels {
    
    public static String message(String logLine) {
        String[] message = logLine.split(":");
        
        return message[1].trim();
    }

    public static String logLevel(String logLine) {
        String[] message = logLine.split(":");
        
        return message[0].replaceAll("[\\]\\[]","").toLowerCase();
    }

    public static String reformat(String logLine) {
        String[] message = logLine.split(":");
        String front = message(logLine) + " ";
        String back = "(" + logLevel(logLine) + ")";
        
        return front + back;
    }
}
