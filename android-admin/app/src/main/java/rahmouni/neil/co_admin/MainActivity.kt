package rahmouni.neil.co_admin

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.ComponentActivity
import com.google.firebase.dynamiclinks.ShortDynamicLink
import com.google.firebase.dynamiclinks.ktx.dynamicLinks
import com.google.firebase.dynamiclinks.ktx.shortLinkAsync
import com.google.firebase.ktx.Firebase

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        finish()

        if (intent?.action == Intent.ACTION_SEND) {
            if ("text/plain" == intent.type) {
                val text = intent.getStringExtra(Intent.EXTRA_TEXT) ?: "null"

                Firebase.dynamicLinks.shortLinkAsync(ShortDynamicLink.Suffix.SHORT) {
                    link = Uri.parse(text)
                    domainUriPrefix = "https://creative-olympics.org"
                }.addOnSuccessListener { result ->
                    val intent = Intent(Intent.ACTION_SEND)
                    intent.type = "text/plain"
                    intent.putExtra(Intent.EXTRA_TEXT, result.shortLink.toString())
                    startActivity(Intent.createChooser(intent, "Share"))
                }.addOnFailureListener {
                    Toast.makeText(applicationContext, "Error", Toast.LENGTH_LONG).show()
                    Toast.makeText(applicationContext, it.message, Toast.LENGTH_LONG).show()
                    Log.e("RahNeil_N3", it.message ?: "null")
                }
            }
        }
    }
}