package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.PathBuilder
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mention12: ImageVector
  get() {
    if (_mention12 != null) {
      return _mention12!!
    }
    _mention12 = fluentIcon(name = "Filled.Mention12", 12f) {
        addGroup(clipPathData = PathBuilder().apply {
            moveTo(0.0F, 0.0F)
            horizontalLineToRelative(12.0F)
            verticalLineToRelative(12.0F)
            horizontalLineTo(0.0F)
            close()
            moveToRelative(0.0F, 0.0F)
        }.getNodes())
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          curveToRelative(0.0F, 1.174F, -0.589F, 1.47F, -0.792F, 1.481F)
          curveTo(9.1F, 7.487F, 8.956F, 7.45F, 8.814F, 7.263F)
          curveTo(8.662F, 7.065F, 8.5F, 6.675F, 8.5F, 6.0F)
          verticalLineTo(3.75F)
          curveTo(8.5F, 3.336F, 8.164F, 3.0F, 7.75F, 3.0F)
          curveTo(7.47F, 3.0F, 7.226F, 3.153F, 7.098F, 3.38F)
          curveTo(6.707F, 3.14F, 6.25F, 3.0F, 5.75F, 3.0F)
          curveTo(4.15F, 3.0F, 3.0F, 4.429F, 3.0F, 6.0F)
          reflectiveCurveToRelative(1.15F, 3.0F, 2.75F, 3.0F)
          curveTo(6.5F, 9.0F, 7.153F, 8.685F, 7.633F, 8.189F)
          curveToRelative(0.42F, 0.54F, 1.022F, 0.826F, 1.66F, 0.79F)
          curveTo(10.588F, 8.906F, 11.5F, 7.63F, 11.5F, 6.0F)
          curveToRelative(0.0F, -3.038F, -2.462F, -5.5F, -5.5F, -5.5F)
          reflectiveCurveTo(0.5F, 2.962F, 0.5F, 6.0F)
          reflectiveCurveToRelative(2.462F, 5.5F, 5.5F, 5.5F)
          curveToRelative(0.5F, 0.0F, 0.987F, -0.067F, 1.45F, -0.193F)
          curveToRelative(0.4F, -0.11F, 0.635F, -0.522F, 0.526F, -0.921F)
          curveToRelative(-0.109F, -0.4F, -0.52F, -0.636F, -0.92F, -0.527F)
          curveTo(6.72F, 9.951F, 6.366F, 10.0F, 6.0F, 10.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveToRelative(0.0F, 0.914F, -0.64F, 1.5F, -1.25F, 1.5F)
          reflectiveCurveTo(4.5F, 6.914F, 4.5F, 6.0F)
          reflectiveCurveToRelative(0.64F, -1.5F, 1.25F, -1.5F)
          reflectiveCurveTo(7.0F, 5.086F, 7.0F, 6.0F)
          close()
      }
    }
    return _mention12!!
  }

private var _mention12: ImageVector? = null
