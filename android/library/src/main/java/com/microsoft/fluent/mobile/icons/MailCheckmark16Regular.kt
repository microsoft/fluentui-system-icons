package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailCheckmark16: ImageVector
  get() {
    if (_mailCheckmark16 != null) {
      return _mailCheckmark16!!
    }
    _mailCheckmark16 = fluentIcon(name = "Regular.MailCheckmark16", 16f) {
      materialPath {
          moveTo(15.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 7.985F, 6.0F, 5.5F)
          reflectiveCurveTo(8.015F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(15.0F, 3.015F, 15.0F, 5.5F)
          close()
          moveToRelative(-2.146F, -1.853F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(9.5F, 6.293F)
          lineTo(8.854F, 5.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(12.0F, 13.0F)
          verticalLineToRelative(-2.207F)
          curveToRelative(0.349F, -0.099F, 0.683F, -0.23F, 1.0F, -0.393F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(2.022F)
          curveTo(5.008F, 5.165F, 5.0F, 5.332F, 5.0F, 5.5F)
          curveTo(5.0F, 5.668F, 5.008F, 5.835F, 5.022F, 6.0F)
          horizontalLineTo(3.0F)
          curveTo(2.448F, 6.0F, 2.0F, 6.448F, 2.0F, 7.0F)
          verticalLineToRelative(0.74F)
          lineToRelative(5.0F, 2.692F)
          lineToRelative(0.544F, -0.293F)
          curveToRelative(0.344F, 0.22F, 0.714F, 0.402F, 1.104F, 0.542F)
          lineToRelative(-1.41F, 0.76F)
          curveToRelative(-0.149F, 0.079F, -0.327F, 0.079F, -0.475F, 0.0F)
          lineTo(2.0F, 8.874F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          close()        
      }
    }
    return _mailCheckmark16!!
  }

private var _mailCheckmark16: ImageVector? = null
