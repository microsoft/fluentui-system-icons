package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mail24: ImageVector
  get() {
    if (_mail24 != null) {
      return _mail24!!
    }
    _mail24 = fluentIcon(name = "Filled.Mail24", 24f) {
      materialPath {
          moveTo(22.0F, 8.608F)
          verticalLineToRelative(8.142F)
          curveToRelative(0.0F, 1.733F, -1.357F, 3.15F, -3.066F, 3.245F)
          lineTo(18.75F, 20.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(2.0F, 16.75F)
          verticalLineTo(8.608F)
          lineToRelative(9.652F, 5.056F)
          curveToRelative(0.218F, 0.114F, 0.478F, 0.114F, 0.696F, 0.0F)
          lineTo(22.0F, 8.608F)
          close()
          moveTo(5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.685F, 0.0F, 3.07F, 1.282F, 3.234F, 2.924F)
          lineTo(12.0F, 12.154F)
          lineToRelative(-9.984F, -5.23F)
          curveToRelative(0.158F, -1.581F, 1.448F, -2.829F, 3.048F, -2.919F)
          lineTo(5.25F, 4.0F)
          horizontalLineToRelative(13.5F)
          close()        
      }
    }
    return _mail24!!
  }

private var _mail24: ImageVector? = null
