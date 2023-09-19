package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flash16: ImageVector
  get() {
    if (_flash16 != null) {
      return _flash16!!
    }
    _flash16 = fluentIcon(name = "Regular.Flash16", 16f) {
      materialPath {
          moveTo(4.915F, 1.714F)
          curveTo(5.04F, 1.291F, 5.43F, 1.0F, 5.873F, 1.0F)
          horizontalLineToRelative(4.406F)
          curveToRelative(0.698F, 0.0F, 1.181F, 0.697F, 0.936F, 1.351F)
          lineTo(10.222F, 5.0F)
          horizontalLineToRelative(2.03F)
          curveToRelative(0.627F, 0.0F, 0.977F, 0.726F, 0.586F, 1.217F)
          lineToRelative(-6.607F, 8.3F)
          curveToRelative(-0.854F, 1.073F, -2.562F, 0.188F, -2.178F, -1.128F)
          lineTo(5.333F, 9.0F)
          horizontalLineTo(3.75F)
          curveTo(3.248F, 9.0F, 2.887F, 8.517F, 3.031F, 8.036F)
          lineToRelative(1.884F, -6.322F)
          close()
          moveTo(10.279F, 2.0F)
          horizontalLineTo(5.873F)
          lineTo(4.085F, 8.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.157F, 0.0F, 0.306F, 0.074F, 0.4F, 0.2F)
          curveToRelative(0.095F, 0.126F, 0.124F, 0.289F, 0.08F, 0.44F)
          lineToRelative(-1.467F, 5.029F)
          curveToRelative(-0.024F, 0.08F, -0.012F, 0.136F, 0.006F, 0.174F)
          curveToRelative(0.022F, 0.045F, 0.062F, 0.088F, 0.119F, 0.118F)
          curveToRelative(0.057F, 0.03F, 0.115F, 0.037F, 0.164F, 0.029F)
          curveToRelative(0.043F, -0.007F, 0.094F, -0.03F, 0.147F, -0.095F)
          lineTo(11.733F, 6.0F)
          horizontalLineTo(9.5F)
          curveTo(9.336F, 6.0F, 9.182F, 5.92F, 9.09F, 5.785F)
          curveTo(8.995F, 5.65F, 8.973F, 5.478F, 9.031F, 5.325F)
          lineTo(10.279F, 2.0F)
          close()        
      }
    }
    return _flash16!!
  }

private var _flash16: ImageVector? = null
