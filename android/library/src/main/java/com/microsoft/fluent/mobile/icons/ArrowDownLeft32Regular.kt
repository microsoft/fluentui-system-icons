package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownLeft32: ImageVector
  get() {
    if (_arrowDownLeft32 != null) {
      return _arrowDownLeft32!!
    }
    _arrowDownLeft32 = fluentIcon(name = "Regular.ArrowDownLeft32", 32f) {
      materialPath {
          moveTo(17.004F, 28.996F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.553F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.418F)
          lineTo(28.707F, 4.707F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(5.003F, 25.582F)
          verticalLineTo(14.996F)
          curveToRelative(0.0F, -0.553F, -0.447F, -1.0F, -1.0F, -1.0F)
          curveToRelative(-0.551F, 0.0F, -1.0F, 0.447F, -1.0F, 1.0F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.552F, 0.449F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(13.0F)
          close()        
      }
    }
    return _arrowDownLeft32!!
  }

private var _arrowDownLeft32: ImageVector? = null
