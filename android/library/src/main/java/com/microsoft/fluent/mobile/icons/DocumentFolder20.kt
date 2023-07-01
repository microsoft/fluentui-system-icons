package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentFolder20: ImageVector
  get() {
    if (_documentFolder20 != null) {
      return _documentFolder20!!
    }
    _documentFolder20 = fluentIcon(name = "Filled.DocumentFolder20", 20f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(-0.879F)
          lineTo(9.0F, 6.879F)
          curveTo(8.437F, 6.316F, 7.674F, 6.0F, 6.879F, 6.0F)
          horizontalLineTo(5.0F)
          curveTo(4.65F, 6.0F, 4.313F, 6.06F, 4.0F, 6.17F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(3.0F, 9.0F)
          curveToRelative(0.35F, 0.0F, 0.687F, 0.06F, 1.0F, 0.17F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(11.0F)
          close()
          moveTo(5.0F, 7.0F)
          curveTo(3.895F, 7.0F, 3.0F, 7.895F, 3.0F, 9.0F)
          verticalLineToRelative(6.5F)
          curveTo(3.0F, 16.88F, 4.12F, 18.0F, 5.5F, 18.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-1.879F)
          curveToRelative(-0.265F, 0.0F, -0.52F, -0.105F, -0.707F, -0.293F)
          lineTo(8.293F, 7.586F)
          curveTo(7.918F, 7.21F, 7.409F, 7.0F, 6.879F, 7.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _documentFolder20!!
  }

private var _documentFolder20: ImageVector? = null
