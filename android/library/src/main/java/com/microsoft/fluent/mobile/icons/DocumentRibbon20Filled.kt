package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentRibbon20: ImageVector
  get() {
    if (_documentRibbon20 != null) {
      return _documentRibbon20!!
    }
    _documentRibbon20 = fluentIcon(name = "Filled.DocumentRibbon20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          verticalLineToRelative(4.5F)
          curveTo(10.0F, 7.328F, 10.672F, 8.0F, 11.5F, 8.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-2.355F)
          curveTo(8.622F, 14.94F, 9.0F, 14.014F, 9.0F, 13.0F)
          curveToRelative(0.0F, -2.209F, -1.79F, -4.0F, -4.0F, -4.0F)
          curveToRelative(-0.345F, 0.0F, -0.68F, 0.044F, -1.0F, 0.127F)
          verticalLineTo(3.5F)
          curveTo(4.0F, 2.67F, 4.672F, 2.0F, 5.5F, 2.0F)
          horizontalLineTo(10.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(6.5F)
          curveTo(11.0F, 6.776F, 11.224F, 7.0F, 11.5F, 7.0F)
          horizontalLineToRelative(4.25F)
          lineTo(11.0F, 2.25F)
          close()
          moveTo(8.0F, 13.0F)
          curveToRelative(0.0F, 1.656F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.344F, -3.0F, -3.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()
          moveToRelative(-1.0F, 3.464F)
          curveTo(6.412F, 16.804F, 5.729F, 17.0F, 5.0F, 17.0F)
          curveToRelative(-0.729F, 0.0F, -1.412F, -0.194F, -2.0F, -0.535F)
          verticalLineToRelative(2.286F)
          curveToRelative(0.0F, 0.194F, 0.211F, 0.314F, 0.378F, 0.215F)
          lineTo(5.0F, 17.998F)
          lineToRelative(1.622F, 0.966F)
          curveTo(6.79F, 19.064F, 7.0F, 18.944F, 7.0F, 18.75F)
          verticalLineToRelative(-2.286F)
          close()        
      }
    }
    return _documentRibbon20!!
  }

private var _documentRibbon20: ImageVector? = null
