package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarCheckmark16: ImageVector
  get() {
    if (_starCheckmark16 != null) {
      return _starCheckmark16!!
    }
    _starCheckmark16 = fluentIcon(name = "Filled.StarCheckmark16", 16f) {
      materialPath {
          moveTo(8.808F, 2.102F)
          curveToRelative(-0.33F, -0.669F, -1.284F, -0.669F, -1.614F, 0.0F)
          lineTo(5.673F, 5.184F)
          lineTo(2.272F, 5.68F)
          curveToRelative(-0.739F, 0.107F, -1.033F, 1.014F, -0.5F, 1.535F)
          lineToRelative(2.462F, 2.399F)
          lineTo(3.653F, 13.0F)
          curveToRelative(-0.126F, 0.736F, 0.645F, 1.296F, 1.306F, 0.949F)
          lineToRelative(0.91F, -0.479F)
          curveTo(5.32F, 12.613F, 5.0F, 11.594F, 5.0F, 10.5F)
          curveToRelative(0.0F, -2.95F, 2.324F, -5.359F, 5.241F, -5.494F)
          lineTo(8.808F, 2.103F)
          close()
          moveTo(15.0F, 10.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveToRelative(-2.146F, -1.854F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(9.5F, 11.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _starCheckmark16!!
  }

private var _starCheckmark16: ImageVector? = null
