package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wifi320: ImageVector
  get() {
    if (_wifi320 != null) {
      return _wifi320!!
    }
    _wifi320 = fluentIcon(name = "Filled.Wifi320", 320f) {
      materialPath {
          moveTo(12.955F, 11.84F)
          curveToRelative(0.363F, 0.364F, 0.662F, 0.81F, 0.87F, 1.283F)
          curveToRelative(0.165F, 0.38F, -0.007F, 0.822F, -0.387F, 0.988F)
          curveToRelative(-0.38F, 0.166F, -0.822F, -0.006F, -0.988F, -0.386F)
          curveToRelative(-0.134F, -0.307F, -0.328F, -0.596F, -0.556F, -0.824F)
          curveToRelative(-1.027F, -1.027F, -2.693F, -1.027F, -3.72F, 0.0F)
          curveToRelative(-0.226F, 0.227F, -0.411F, 0.504F, -0.547F, 0.814F)
          curveToRelative(-0.166F, 0.38F, -0.608F, 0.553F, -0.987F, 0.386F)
          curveToRelative(-0.38F, -0.166F, -0.553F, -0.608F, -0.387F, -0.987F)
          curveToRelative(0.208F, -0.477F, 0.497F, -0.91F, 0.86F, -1.273F)
          curveToRelative(1.614F, -1.613F, 4.229F, -1.613F, 5.842F, 0.0F)
          close()
          moveToRelative(-2.034F, 2.042F)
          curveToRelative(0.485F, 0.485F, 0.485F, 1.271F, 0.0F, 1.757F)
          curveToRelative(-0.485F, 0.485F, -1.271F, 0.485F, -1.757F, 0.0F)
          curveToRelative(-0.485F, -0.486F, -0.485F, -1.272F, 0.0F, -1.757F)
          curveToRelative(0.486F, -0.485F, 1.272F, -0.485F, 1.757F, 0.0F)
          close()        
      }
    }
    return _wifi320!!
  }

private var _wifi320: ImageVector? = null
