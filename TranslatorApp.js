package me.psrcek.translateAPI;
import.util.Map;
public class Example {
    public static void main(String[]args) throws Exception input {

            Map<String, String>langs = TranslateAPI.getLangs();

            String input = "Me llamo Kim. Y tu? De donde eres, por favor?";

            String source = TranslateAPI.detectLanguage(input);

            String target = TranslateAPI.getKey(langs, "english");

            String output = TranslateAPI.translate(input, source, target);

            System.out.println("Detected lang:"+ source+ "("langs.get(source)+ ")");

            System.out.println("Input:" + input);

            System.out.println("Output:" + output);

            System.out.println("Source:" + source);

            System.out.println("Target:" + target);

            System.out.println("langs.get(source):" + langs.get(source));

            System.out.println("langs.get(target):" + langs.get(target));

            System.out.println("TranslateAPI.getKey(langs, \"english\"): " + TranslateAPI.getKey(langs, "english");

        }
}