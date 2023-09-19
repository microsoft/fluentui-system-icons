package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Star16: ImageVector
  get() {
    if (_star16 != null) {
      return _star16!!
    }
    _star16 = fluentIcon(name = "Filled.Star16", 16f) {
      materialPath {
          moveTo(7.194F, 2.101F)
          curveToRelative(0.33F, -0.669F, 1.284F, -0.669F, 1.614F, 0.0F)
          lineToRelative(1.521F, 3.082F)
          lineToRelative(3.401F, 0.495F)
          curveToRelative(0.739F, 0.107F, 1.033F, 1.014F, 0.5F, 1.535F)
          lineToRelative(-2.462F, 2.399F)
          lineToRelative(0.581F, 3.387F)
          curveToRelative(0.126F, 0.736F, -0.646F, 1.296F, -1.306F, 0.949F)
          lineToRelative(-3.042F, -1.6F)
          lineToRelative(-3.042F, 1.6F)
          curveToRelative(-0.66F, 0.347F, -1.432F, -0.213F, -1.306F, -0.949F)
          lineToRelative(0.58F, -3.387F)
          lineToRelative(-2.46F, -2.4F)
          curveToRelative(-0.534F, -0.52F, -0.24F, -1.427F, 0.499F, -1.534F)
          lineToRelative(3.4F, -0.495F)
          lineToRelative(1.522F, -3.082F)
          close()        
      }
    }
    return _star16!!
  }

private var _star16: ImageVector? = null
