import com.vanniktech.maven.publish.SonatypeHost

plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.maven.publish)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.compose)
}

kotlin {
    androidTarget { publishLibraryVariants("release") }
    jvm()
    js { browser() }
    wasmJs { browser() }
    iosX64()
    iosArm64()
    iosSimulatorArm64()

    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.components.resources)
        }
    }

}

android {
    namespace = "com.microsoft.fluent.compose.icons"
    compileSdk = 35

    defaultConfig {
        minSdk = 21
    }
}

val copyAndroidVectorIcons = tasks.register("copyAndroidVectorIcons", CopyAndroidIcons::class) {
    srcDir = rootProject.projectDir.resolve("../android/library/src/main/res/drawable")
    destDir = layout.buildDirectory.dir("genComposeResources/drawable")
}

compose.resources {
    publicResClass = true
    packageOfResClass = "com.microsoft.design.compose.icons"
    customDirectory(
        sourceSetName = "commonMain",
        directoryProvider = copyAndroidVectorIcons.map { it.destDir.dir("..").get() }
    )
}

abstract class CopyAndroidIcons : DefaultTask() {
    @get:InputDirectory
    abstract val srcDir: DirectoryProperty

    @get:OutputDirectory
    abstract val destDir: DirectoryProperty

    data class IconInfo(val id: String, val type: String, val size: Int, val file: File)

    @TaskAction
    fun run() {
        val out = destDir.get().asFile
        out.deleteRecursively()
        out.mkdirs()

        val icons = srcDir.get().asFile.listFiles().orEmpty()
            .filter { f -> f.isFile && f.extension == "xml" }
            .map { f ->
                f.nameWithoutExtension.split("_").let { parts ->
                    val type = parts.last()
                    val size = parts[parts.size - 2].toInt()
                    IconInfo(f.nameWithoutExtension.substringBefore("_${size}_$type"), type, size, f)
                }
            }
            .filterNot { i -> i.type == "selector" }
            .map { it.file }
        icons.forEach { file ->
            logger.info("Copying ${file.name}")
            val icon = file.copyTo(out.resolve(file.name), overwrite = true)
            icon.writeText(
                icon.readText().replace("@color/fluent_default_icon_tint", "#000000")
            )
        }
    }
}

//Publishing your Kotlin Multiplatform library to Maven Central
//https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-publish-libraries.html
mavenPublishing {
    publishToMavenCentral(SonatypeHost.CENTRAL_PORTAL)
    coordinates("com.microsoft.design.compose", "fluent-system-icons", "1.0.0")

    pom {
        name = "Fluent UI System Icons"
        description = "Fluent UI System Icons for Compose Multiplatform"
        url = "https://github.com/microsoft/fluentui-system-icons"

        licenses {
            license {
                name = "MIT"
                url = "https://opensource.org/licenses/MIT"
            }
        }

        developers {
            developer {
                id = "" //todo
                name = "" //todo
                email = "" //todo
            }
        }

        scm {
            url = "https://github.com/microsoft/fluentui-system-icons"
        }
    }
    if (project.hasProperty("signing.keyId")) signAllPublications()
}
