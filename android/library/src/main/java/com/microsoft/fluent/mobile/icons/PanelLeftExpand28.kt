package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftExpand28: ImageVector
  get() {
    if (_panelLeftExpand28 != null) {
      return _panelLeftExpand28!!
    }
    _panelLeftExpand28 = fluentIcon(name = "Filled.PanelLeftExpand28", 28f) {
      materialPath {
          moveTo(17.72F, 11.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.72F, -1.72F)
          horizontalLineToRelative(-5.69F)
          curveTo(13.336F, 14.75F, 13.0F, 14.414F, 13.0F, 14.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(5.69F)
          lineToRelative(-1.72F, -1.72F)
          close()
          moveTo(22.25F, 4.0F)
          curveTo(24.322F, 4.0F, 26.0F, 5.679F, 26.0F, 7.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 2.071F, -1.678F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(5.755F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineTo(7.75F)
          curveTo(2.004F, 5.679F, 3.683F, 4.0F, 5.754F, 4.0F)
          horizontalLineTo(22.25F)
          close()
          moveToRelative(2.25F, 3.75F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(11.005F)
          verticalLineToRelative(17.0F)
          horizontalLineTo(22.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(7.75F)
          close()        
      }
    }
    return _panelLeftExpand28!!
  }

private var _panelLeftExpand28: ImageVector? = null
