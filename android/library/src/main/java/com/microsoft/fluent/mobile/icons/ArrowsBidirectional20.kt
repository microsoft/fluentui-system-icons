package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowsBidirectional20: ImageVector
  get() {
    if (_arrowsBidirectional20 != null) {
      return _arrowsBidirectional20!!
    }
    _arrowsBidirectional20 = fluentIcon(name = "Filled.ArrowsBidirectional20", 20f) {
      materialPath {
          moveTo(6.678F, 5.033F)
          curveTo(6.872F, 5.106F, 7.0F, 5.293F, 7.0F, 5.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.208F, 0.128F, -0.394F, 0.322F, -0.467F)
          curveToRelative(0.194F, -0.074F, 0.414F, -0.02F, 0.552F, 0.135F)
          lineToRelative(4.0F, 4.5F)
          curveToRelative(0.168F, 0.19F, 0.168F, 0.475F, 0.0F, 0.664F)
          lineToRelative(-4.0F, 4.5F)
          curveToRelative(-0.138F, 0.155F, -0.358F, 0.21F, -0.552F, 0.135F)
          curveTo(13.128F, 14.894F, 13.0F, 14.707F, 13.0F, 14.5F)
          verticalLineTo(12.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.208F, -0.128F, 0.394F, -0.322F, 0.467F)
          curveToRelative(-0.194F, 0.074F, -0.414F, 0.02F, -0.552F, -0.135F)
          lineToRelative(-4.0F, -4.5F)
          curveToRelative(-0.168F, -0.19F, -0.168F, -0.475F, 0.0F, -0.664F)
          lineToRelative(4.0F, -4.5F)
          curveToRelative(0.138F, -0.155F, 0.358F, -0.21F, 0.552F, -0.135F)
          close()        
      }
    }
    return _arrowsBidirectional20!!
  }

private var _arrowsBidirectional20: ImageVector? = null
