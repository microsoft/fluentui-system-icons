package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentRibbon16: ImageVector
  get() {
    if (_documentRibbon16 != null) {
      return _documentRibbon16!!
    }
    _documentRibbon16 = fluentIcon(name = "Filled.DocumentRibbon16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveTo(8.0F, 5.328F, 8.672F, 6.0F, 9.5F, 6.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(6.976F)
          curveTo(6.992F, 14.92F, 7.0F, 14.835F, 7.0F, 14.75F)
          verticalLineToRelative(-3.105F)
          curveTo(7.622F, 10.94F, 8.0F, 10.014F, 8.0F, 9.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          curveToRelative(-0.345F, 0.0F, -0.68F, 0.043F, -1.0F, 0.126F)
          verticalLineTo(2.5F)
          curveTo(3.0F, 1.67F, 3.672F, 1.0F, 4.5F, 1.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(4.5F)
          curveTo(9.0F, 4.776F, 9.224F, 5.0F, 9.5F, 5.0F)
          horizontalLineToRelative(3.25F)
          lineTo(9.0F, 1.25F)
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
