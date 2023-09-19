package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailProhibited16: ImageVector
  get() {
    if (_mailProhibited16 != null) {
      return _mailProhibited16!!
    }
    _mailProhibited16 = fluentIcon(name = "Filled.MailProhibited16", 16f) {
      materialPath {
          moveTo(6.0F, 5.5F)
          curveTo(6.0F, 7.985F, 8.015F, 10.0F, 10.5F, 10.0F)
          reflectiveCurveTo(15.0F, 7.985F, 15.0F, 5.5F)
          reflectiveCurveTo(12.985F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(6.0F, 3.015F, 6.0F, 5.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveTo(7.0F, 3.567F, 8.567F, 2.0F, 10.5F, 2.0F)
          curveToRelative(0.786F, 0.0F, 1.512F, 0.26F, 2.096F, 0.697F)
          lineToRelative(-4.9F, 4.9F)
          curveTo(7.26F, 7.011F, 7.0F, 6.286F, 7.0F, 5.5F)
          close()
          moveTo(10.5F, 9.0F)
          curveTo(9.714F, 9.0F, 8.988F, 8.74F, 8.404F, 8.303F)
          lineToRelative(4.9F, -4.9F)
          curveTo(13.74F, 3.989F, 14.0F, 4.714F, 14.0F, 5.5F)
          curveTo(14.0F, 7.433F, 12.433F, 9.0F, 10.5F, 9.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(0.9F, 0.0F, 1.75F, -0.216F, 2.5F, -0.6F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(8.337F)
          lineToRelative(5.763F, 3.103F)
          curveToRelative(0.148F, 0.08F, 0.326F, 0.08F, 0.474F, 0.0F)
          lineToRelative(1.411F, -0.76F)
          curveTo(9.227F, 10.888F, 9.85F, 11.0F, 10.5F, 11.0F)
          close()
          moveTo(3.0F, 5.0F)
          horizontalLineToRelative(2.022F)
          curveTo(5.008F, 5.165F, 5.0F, 5.332F, 5.0F, 5.5F)
          curveToRelative(0.0F, 1.95F, 1.014F, 3.662F, 2.544F, 4.64F)
          lineTo(7.0F, 10.431F)
          lineToRelative(-6.0F, -3.23F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _mailProhibited16!!
  }

private var _mailProhibited16: ImageVector? = null
