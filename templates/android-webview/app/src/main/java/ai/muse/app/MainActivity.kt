package ai.muse.app

import android.os.Bundle
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private val spaceUrl = "https://muse.ai/"
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Replace with a five-tab layout. Give each WebView a distinct data directory suffix.
        val webView = WebView(this)
        webView.settings.javaScriptEnabled = true
        webView.loadUrl(spaceUrl)
        setContentView(webView)
    }
}
