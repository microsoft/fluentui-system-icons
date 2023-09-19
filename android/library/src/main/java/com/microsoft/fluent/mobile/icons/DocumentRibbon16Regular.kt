package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentRibbon16: ImageVector
  get() {
    if (_documentRibbon16 != null) {
      return _documentRibbon16!!
    }
    _documentRibbon16 = fluentIcon(name = "Regular.DocumentRibbon16", 16f) {
      materialPath {
          moveTo(5.0F, 1.0F)
          curveTo(3.895F, 1.0F, 3.0F, 1.895F, 3.0F, 3.0F)
          verticalLineToRelative(2.126F)
          curveTo(3.32F, 5.043F, 3.655F, 5.0F, 4.0F, 5.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(2.5F)
          curveTo(8.0F, 5.328F, 8.672F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(0.75F)
          curveToRelative(0.0F, 0.086F, -0.008F, 0.17F, -0.024F, 0.25F)
          horizontalLineTo(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.896F, 2.0F, -2.0F)
          verticalLineTo(5.413F)
          curveToRelative(0.0F, -0.398F, -0.158F, -0.78F, -0.44F, -1.06F)
          lineTo(9.647F, 1.438F)
          curveTo(9.367F, 1.158F, 8.984F, 1.0F, 8.586F, 1.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(6.793F, 4.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 5.0F, 9.0F, 4.776F, 9.0F, 4.5F)
          verticalLineTo(2.207F)
          lineTo(11.793F, 5.0F)
          close()
          moveTo(7.0F, 9.0F)
          curveToRelative(0.0F, 1.656F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.344F, -3.0F, -3.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()
          moveToRelative(-1.0F, 3.464F)
          curveTo(5.412F, 12.804F, 4.729F, 13.0F, 4.0F, 13.0F)
          curveToRelative(-0.729F, 0.0F, -1.412F, -0.194F, -2.0F, -0.535F)
          verticalLineToRelative(2.286F)
          curveToRelative(0.0F, 0.194F, 0.211F, 0.314F, 0.378F, 0.214F)
          lineTo(4.0F, 14.0F)
          lineToRelative(1.622F, 0.965F)
          curveTo(5.79F, 15.064F, 6.0F, 14.944F, 6.0F, 14.75F)
          verticalLineToRelative(-2.286F)
          close()        
      }
    }
    return _documentRibbon16!!
  }

private var _documentRibbon16: ImageVector? = null
