package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextFontInfo16: ImageVector
  get() {
    if (_textFontInfo16 != null) {
      return _textFontInfo16!!
    }
    _textFontInfo16 = fluentIcon(name = "Filled.TextFontInfo16", 16f) {
      materialPath {
          moveTo(5.704F, 1.74F)
          curveTo(5.595F, 1.447F, 5.314F, 1.25F, 5.0F, 1.25F)
          curveToRelative(-0.314F, 0.0F, -0.595F, 0.196F, -0.704F, 0.49F)
          lineToRelative(-3.5F, 9.5F)
          curveToRelative(-0.143F, 0.39F, 0.056F, 0.82F, 0.445F, 0.964F)
          curveToRelative(0.389F, 0.143F, 0.82F, -0.056F, 0.963F, -0.445F)
          lineTo(3.128F, 9.25F)
          horizontalLineToRelative(2.015F)
          curveToRelative(0.124F, -0.534F, 0.326F, -1.038F, 0.593F, -1.5F)
          horizontalLineTo(3.68F)
          lineTo(5.0F, 4.17F)
          lineToRelative(1.11F, 3.015F)
          curveToRelative(0.332F, -0.44F, 0.729F, -0.827F, 1.175F, -1.149F)
          lineTo(5.704F, 1.741F)
          close()
          moveTo(10.5F, 7.876F)
          curveToRelative(-0.345F, 0.0F, -0.625F, 0.28F, -0.625F, 0.625F)
          reflectiveCurveToRelative(0.28F, 0.625F, 0.625F, 0.625F)
          reflectiveCurveToRelative(0.625F, -0.28F, 0.625F, -0.625F)
          reflectiveCurveToRelative(-0.28F, -0.625F, -0.625F, -0.625F)
          close()
          moveToRelative(0.0F, 5.125F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(10.0F, 10.224F, 10.0F, 10.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          close()
          moveToRelative(0.0F, -7.0F)
          curveTo(8.015F, 6.0F, 6.0F, 8.015F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 15.0F, 10.5F, 15.0F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.985F, 6.0F, 10.5F, 6.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveTo(8.567F, 14.0F, 7.0F, 12.433F, 7.0F, 10.5F)
          reflectiveCurveTo(8.567F, 7.0F, 10.5F, 7.0F)
          reflectiveCurveTo(14.0F, 8.567F, 14.0F, 10.5F)
          reflectiveCurveTo(12.433F, 14.0F, 10.5F, 14.0F)
          close()        
      }
    }
    return _textFontInfo16!!
  }

private var _textFontInfo16: ImageVector? = null
