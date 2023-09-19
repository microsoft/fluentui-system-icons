package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.StarHalf16: ImageVector
  get() {
    if (_starHalf16 != null) {
      return _starHalf16!!
    }
    _starHalf16 = fluentIcon(name = "Regular.StarHalf16", 16f) {
      materialPath {
          moveTo(5.673F, 5.183F)
          lineToRelative(1.52F, -3.082F)
          curveTo(7.36F, 1.767F, 7.68F, 1.6F, 8.0F, 1.6F)
          curveToRelative(0.321F, 0.0F, 0.643F, 0.166F, 0.808F, 0.501F)
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
          close()
          moveTo(8.0F, 11.336F)
          curveToRelative(0.144F, 0.0F, 0.288F, 0.034F, 0.42F, 0.103F)
          lineToRelative(2.91F, 1.53F)
          lineToRelative(-0.556F, -3.24F)
          curveToRelative(-0.05F, -0.292F, 0.046F, -0.59F, 0.258F, -0.797F)
          lineToRelative(2.354F, -2.294F)
          lineToRelative(-3.253F, -0.473F)
          curveTo(9.84F, 6.123F, 9.587F, 5.94F, 9.456F, 5.673F)
          lineTo(8.0F, 2.726F)
          verticalLineToRelative(8.61F)
          close()        
      }
    }
    return _starHalf16!!
  }

private var _starHalf16: ImageVector? = null
