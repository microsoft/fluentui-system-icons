package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clover48: ImageVector
  get() {
    if (_clover48 != null) {
      return _clover48!!
    }
    _clover48 = fluentIcon(name = "Filled.Clover48", 48f) {
      materialPath {
          moveTo(13.5F, 4.0F)
          curveTo(8.253F, 4.0F, 4.0F, 8.253F, 4.0F, 13.5F)
          reflectiveCurveTo(8.253F, 23.0F, 13.5F, 23.0F)
          horizontalLineToRelative(8.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(13.5F)
          curveTo(23.0F, 8.253F, 18.747F, 4.0F, 13.5F, 4.0F)
          close()
          moveToRelative(-0.025F, 40.0F)
          curveTo(8.26F, 44.0F, 4.0F, 39.774F, 4.0F, 34.55F)
          curveToRelative(0.0F, -5.22F, 4.23F, -9.45F, 9.45F, -9.45F)
          horizontalLineToRelative(8.3F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(8.15F)
          curveToRelative(0.0F, 5.252F, -4.283F, 9.5F, -9.525F, 9.5F)
          close()
          moveTo(34.5F, 4.0F)
          curveToRelative(5.247F, 0.0F, 9.5F, 4.253F, 9.5F, 9.5F)
          reflectiveCurveTo(39.747F, 23.0F, 34.5F, 23.0F)
          horizontalLineToRelative(-8.25F)
          curveTo(25.56F, 23.0F, 25.0F, 22.44F, 25.0F, 21.75F)
          verticalLineTo(13.5F)
          curveTo(25.0F, 8.253F, 29.253F, 4.0F, 34.5F, 4.0F)
          close()
          moveToRelative(0.0F, 40.0F)
          curveToRelative(5.247F, 0.0F, 9.5F, -4.253F, 9.5F, -9.5F)
          reflectiveCurveTo(39.747F, 25.0F, 34.5F, 25.0F)
          horizontalLineToRelative(-8.25F)
          curveTo(25.56F, 25.0F, 25.0F, 25.56F, 25.0F, 26.25F)
          verticalLineToRelative(8.25F)
          curveToRelative(0.0F, 5.247F, 4.253F, 9.5F, 9.5F, 9.5F)
          close()        
      }
    }
    return _clover48!!
  }

private var _clover48: ImageVector? = null
