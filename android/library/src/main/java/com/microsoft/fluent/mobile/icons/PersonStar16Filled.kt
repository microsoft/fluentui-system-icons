package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonStar16: ImageVector
  get() {
    if (_personStar16 != null) {
      return _personStar16!!
    }
    _personStar16 = fluentIcon(name = "Filled.PersonStar16", 16f) {
      materialPath {
          moveTo(6.327F, 6.917F)
          curveTo(7.156F, 5.952F, 8.313F, 5.28F, 9.626F, 5.07F)
          curveTo(9.706F, 4.81F, 9.75F, 4.535F, 9.75F, 4.25F)
          curveTo(9.75F, 2.731F, 8.519F, 1.5F, 7.0F, 1.5F)
          reflectiveCurveTo(4.25F, 2.731F, 4.25F, 4.25F)
          curveToRelative(0.0F, 1.287F, 0.884F, 2.367F, 2.077F, 2.667F)
          close()
          moveTo(5.0F, 10.5F)
          curveTo(5.0F, 9.6F, 5.216F, 8.75F, 5.6F, 8.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 8.0F, 2.0F, 8.672F, 2.0F, 9.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.803F, 1.555F, 3.653F, 4.222F, 3.957F)
          curveTo(5.458F, 13.012F, 5.0F, 11.809F, 5.0F, 10.5F)
          close()
          moveToRelative(10.0F, 0.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          reflectiveCurveTo(15.0F, 8.015F, 15.0F, 10.5F)
          close()
          moveToRelative(-4.024F, -2.64F)
          curveToRelative(-0.15F, -0.48F, -0.802F, -0.48F, -0.952F, 0.0F)
          lineTo(9.547F, 9.393F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.484F, 0.0F, -0.686F, 0.647F, -0.294F, 0.944F)
          lineToRelative(1.25F, 0.947F)
          lineToRelative(-0.477F, 1.532F)
          curveToRelative(-0.15F, 0.48F, 0.378F, 0.88F, 0.77F, 0.583F)
          lineToRelative(1.25F, -0.947F)
          lineToRelative(1.25F, 0.947F)
          curveToRelative(0.392F, 0.297F, 0.92F, -0.103F, 0.77F, -0.583F)
          lineToRelative(-0.477F, -1.532F)
          lineToRelative(1.25F, -0.947F)
          curveToRelative(0.392F, -0.297F, 0.19F, -0.944F, -0.294F, -0.944F)
          horizontalLineToRelative(-1.546F)
          lineToRelative(-0.477F, -1.531F)
          close()        
      }
    }
    return _personStar16!!
  }

private var _personStar16: ImageVector? = null
