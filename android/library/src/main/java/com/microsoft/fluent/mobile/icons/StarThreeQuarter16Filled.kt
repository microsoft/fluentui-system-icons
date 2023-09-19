package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarThreeQuarter16: ImageVector
  get() {
    if (_starThreeQuarter16 != null) {
      return _starThreeQuarter16!!
    }
    _starThreeQuarter16 = fluentIcon(name = "Filled.StarThreeQuarter16", 16f) {
      materialPath {
          moveTo(7.194F, 2.101F)
          curveToRelative(0.33F, -0.669F, 1.284F, -0.669F, 1.614F, 0.0F)
          lineTo(10.0F, 4.516F)
          verticalLineTo(13.4F)
          lineToRelative(-1.999F, -1.051F)
          lineToRelative(-3.042F, 1.599F)
          curveToRelative(-0.66F, 0.347F, -1.432F, -0.213F, -1.306F, -0.949F)
          lineToRelative(0.58F, -3.387F)
          lineToRelative(-2.46F, -2.4F)
          curveToRelative(-0.534F, -0.52F, -0.24F, -1.427F, 0.499F, -1.534F)
          lineToRelative(3.4F, -0.495F)
          lineToRelative(1.522F, -3.082F)
          close()        
      }
    }
    return _starThreeQuarter16!!
  }

private var _starThreeQuarter16: ImageVector? = null
